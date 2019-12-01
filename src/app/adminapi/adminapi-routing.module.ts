import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipovacunaAddComponent } from './tipovacuna/tipovacuna-add/tipovacuna-add.component';
import { TipovacunaGetComponent } from './tipovacuna/tipovacuna-get/tipovacuna-get.component';
import { TipovacunaEditComponent } from './tipovacuna/tipovacuna-edit/tipovacuna-edit.component'
import { VeterinarioAddComponent } from './veterinario/veterinario-add/veterinario-add.component';
import { VeterinarioGetComponent } from './veterinario/veterinario-get/veterinario-get.component';
import { VeterinarioEditComponent } from './veterinario/veterinario-edit/veterinario-edit.component';
import { PropietarioAddComponent } from './propietario/propietario-add/propietario-add.component';
import { PropietarioGetComponent } from './propietario/propietario-get/propietario-get.component';
import { PropietarioEditComponent } from './propietario/propietario-edit/propietario-edit.component';


const routes: Routes = [
  
  {
    path: '',    
    children: [
    {
      path: 'tipovacuna/tipovacuna-add',
      component: TipovacunaAddComponent,
      data: {
        title: 'Crear vacuna'
      }
    },

    {
      path: 'tipovacuna/tipovacuna-get',
      component: TipovacunaGetComponent,
      data: {
        title: 'listar vacunas'
      }
    },

    {
      path: 'veterinario/veterinario-get',
      component: VeterinarioGetComponent,
      data: {
        title: 'listar veterinario'
      }
    },

    {
      path: 'veterinario/veterinario-add',
      component: VeterinarioAddComponent,
      data: {
        title: 'crear veterinario'
      }
    },

    {
      path: 'propietario/propietario-get',
      component: PropietarioGetComponent,
      data: {
        title: 'listar propietario'
      }
    },

    {
      path: 'propietario/propietario-add',
      component: PropietarioAddComponent,
      data: {
        title: 'crear propietario'
      }
    },
    
    ]
  }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminapiRoutingModule { }
