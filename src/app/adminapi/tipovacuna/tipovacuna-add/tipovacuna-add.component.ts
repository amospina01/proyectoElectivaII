import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { TipovacunaService } from '../tipovacuna.service';
import { NgForm } from '@angular/forms';
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-tipovacuna-add',
  templateUrl: './tipovacuna-add.component.html',
  styleUrls: ['./tipovacuna-add.component.scss']
})
export class TipovacunaAddComponent implements OnInit {

  @ViewChild ('p', {static: false}) agregarTvForm: NgForm;
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private tipovacunaService :TipovacunaService) { }

  ngOnInit() {
    
  }


  public agregarTv(agregarTvForm: NgForm){
    this.loading = true;
   const formCrearTvacuna ={
     nombre: agregarTvForm.form.value.nom
     
   }
   this.tipovacunaService.crearSuccesful(formCrearTvacuna).subscribe(dataFinal => {
    this.loading = true;
    console.log(formCrearTvacuna);
    if (dataFinal.token) {
      const tokenCifrado = this.tipovacunaService.cifrarToken(dataFinal.token)
      sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
      this.router.navigate(['/components/carousel'])
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