import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TipovacunaService } from '../tipovacuna.service';
import { NgForm } from '@angular/forms';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-tipovacuna-get',
  templateUrl: './tipovacuna-get.component.html',
  styleUrls: ['./tipovacuna-get.component.scss']
})
export class TipovacunaGetComponent {

  @ViewChild('k', {static: false}) buscarForm: NgForm; eliminarForm: NgForm
  public loading= false;
  public tipovacunas = [];
  filterTipovacuna = '';
 

  constructor(private router: Router,
      private route: ActivatedRoute,
      private tipovacunaService :TipovacunaService) { }



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
    
  this.tipovacunaService.buscarSuccesful(buscarForm).subscribe(dataFinal => {
    this.loading = true;
   this.tipovacunas =dataFinal.tipoVacuna;
   console.log(this.tipovacunas)

  });



  this.tipovacunaService.deleteTipovacuna(this.eliminarForm).subscribe(dataFinal => {
   this.loading = true;
   this.tipovacunas =dataFinal.tipoVacuna;
   console.log(this.tipovacunas)

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





