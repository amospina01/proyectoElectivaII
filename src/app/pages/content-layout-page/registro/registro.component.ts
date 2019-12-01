import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';
import { RegistroService } from './registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent  {

  @ViewChild('f', {static: false}) registForm: NgForm;
  public loading= false;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private registroService:RegistroService){}

    //  On submit click, reset field value
    onSubmit() {
        this.registForm.reset(); 
    }

    public registro(userRegistro: NgForm){
      this.loading = true;
     const formRegistro ={
       usuario: userRegistro.form.value.usuario,
       email: userRegistro.form.value.email,
       password: userRegistro.form.value.password
     }
     this.registroService.registroSuccesful(formRegistro).subscribe(dataFinal => {
      this.loading = true;
      console.log(formRegistro);
      if (dataFinal.token) {
        console.log(userRegistro)
        const tokenCifrado = this.registroService.cifrarToken(dataFinal.token)
        sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
        this.router.navigate(['/login'])
        this.loading = false;
      }
    }, 
      error => {
       
          this.loading = true;
          Swal.fire({
            title: 'Algo ha fallado',
            text: error.Errors.message,
            icon: 'warning',
            confirmButtonText: 'Quiero volverlo a intentar'
          })
       
        this.loading = false;
      });
    this.loading = false;
    
  }

    

}
