import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { PropietarioService } from '../propietario.service';
import { NgForm } from '@angular/forms';
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-propietario-add',
  templateUrl: './propietario-add.component.html',
  styleUrls: ['./propietario-add.component.scss']
})
export class PropietarioAddComponent implements OnInit {

  @ViewChild ('e', {static: false}) agregarPropiForm: NgForm;
  public loading= false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private propietarioService :PropietarioService) { }

  ngOnInit() {
    
  }


  public agregarPropi(agregarPropiForm: NgForm){
    this.loading = true;
     const formCrearPropietario ={
     cedula: agregarPropiForm.form.value.cedula,
     nombre: agregarPropiForm.form.value.nombre,
     direccion: agregarPropiForm.form.value.direccion,
     telefono: agregarPropiForm.form.value.telefono
     
   }
   this.propietarioService.crearSuccesful(formCrearPropietario).subscribe(dataFinal => {
    this.loading = true;
    console.log(formCrearPropietario);
    if (dataFinal.token) {
      const tokenCifrado = this.propietarioService.cifrarToken(dataFinal.token)
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
