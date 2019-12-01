import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers} from '@angular/http';
import { Body } from '@angular/http/src/body';
import {pipe} from 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {map, catchError} from 'rxjs/operators';
import {observable} from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
//import { RequestOptions } from 'http';
import { environment } from 'environments/environment';
import * as CryptoJS from 'crypto-js';
import { Buffer } from 'buffer';
import Swal  from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private token; 

  constructor( private httpClient: HttpClientModule,
    private http: Http) { }


  public loginValidado(data):Observable<any> {
    let url =environment.urlApi+'signin';
    console.log(url);
      return this.http.post(url
        ,data,{headers : this.headersREST()})
        .pipe(map(res => {
          return res.json();
      }), pipe(catchError(this.handleError)))
  }

  //headers
  private headersREST(): Headers{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
   // myHeaders.append('access_token', localStorage.getItem('token'));
    return myHeaders;
  }

  autenticarService(data: string){
      console.log('metodo en uso... ' + data)
      } 

    
  private handleError(error: Response){
    const setError  = (error['_body'])? JSON.parse(error['_body']): error.statusText
    const json = {
      Error: setError,
      Resultado: [],
      EsExitoso:false,
      Status: error.status
    };
    return Observable.throw(json);
  }


  public cifrarToken (token) {
    token = Buffer.from(token).toString('base64')
    this.token = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token), CryptoJS.enc.Utf8.parse(environment.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(environment.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const reponse = {
      nameToken: 'token',
      cifrado: this.token
    }
    return reponse
  }


  public revelarToken (tokenCifrado) {
    const decrypted = CryptoJS.AES.decrypt(tokenCifrado, CryptoJS.enc.Utf8.parse(environment.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(environment.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const dataDecrypt = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8), 'base64').toString('ascii');
    const response = {
      nameToken: 'token',
      tokenValid: dataDecrypt
    }
    return response;
  }


  public estaLogueado (){
    const existToken = sessionStorage.getItem('token');
    if (existToken) {
      const tokenDec = this.revelarToken(this.token);
      if (!tokenDec) {
        Swal.fire({
          title: 'Cuidado',
          text: 'Tu token ha sido alterado o modificado, Comunicate con el administrador',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
      
    }
    return false;

  }

}