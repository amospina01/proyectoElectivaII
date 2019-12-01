import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PropietarioService } from '../propietario.service';
import { NgForm } from '@angular/forms';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-propietario-get',
  templateUrl: './propietario-get.component.html',
  styleUrls: ['./propietario-get.component.scss']
})
export class PropietarioGetComponent implements OnInit {

  @ViewChild('f', {static: false}) buscarForm: NgForm; eliminarForm: NgForm
  public loading= false;
  public propietarios = [];
  filterPropietario = '';
 

  constructor(private router: Router,
      private route: ActivatedRoute,
      private propietarioService :PropietarioService) { }



  ngOnInit() {
  } 

  // On submit button click
  onSubmit() {
    this.buscarForm.reset();
    
  }

  public eliminar (eliminado: NgForm){
    this.loading = true;
    const eliminarForm ={
      nombre: eliminado.form.value.nombre,

         
    }

  }
  
  public buscar (busqueda: NgForm){
    this.loading = true;
    const buscarForm ={
      nombre: busqueda.form.value.nombre,

         
    }
    
  this.propietarioService.buscarSuccesful(buscarForm).subscribe(dataFinal => {
    this.loading = true;
   this.propietarios =dataFinal.tipoVacuna;
   console.log(this.propietarios)

  });



  this.propietarioService.deleteTipovacuna(this.eliminarForm).subscribe(dataFinal => {
   this.loading = true;
   this.propietarios =dataFinal.tipoVacuna;
   console.log(this.propietarios)

  });

  
  
    error => {
     
        this.loading = true;
        Swal.fire({
          title: 'Algo ha fallado',
          text: error.Errors.message,
          icon: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
        })
     
      this.loading = false;
    };
  this.loading = false;
  }
   
}






