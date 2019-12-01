import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TipomascotaService {

  constructor(private http: HttpClient) { }
}
