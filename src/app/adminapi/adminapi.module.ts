import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminapiRoutingModule } from './adminapi-routing.module';
import { TipovacunaAddComponent } from './tipovacuna/tipovacuna-add/tipovacuna-add.component';
import { TipovacunaService } from './tipovacuna/tipovacuna.service';
import { TipovacunaEditComponent } from './tipovacuna/tipovacuna-edit/tipovacuna-edit.component';
import { TipovacunaGetComponent } from './tipovacuna/tipovacuna-get/tipovacuna-get.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { VeterinarioAddComponent } from './veterinario/veterinario-add/veterinario-add.component';
import { VeterinarioGetComponent } from './veterinario/veterinario-get/veterinario-get.component';
import { VeterinarioEditComponent } from './veterinario/veterinario-edit/veterinario-edit.component';
import { PropietarioAddComponent } from './propietario/propietario-add/propietario-add.component';
import { PropietarioGetComponent } from './propietario/propietario-get/propietario-get.component';
import { PropietarioEditComponent } from './propietario/propietario-edit/propietario-edit.component';

@NgModule({
  declarations: [TipovacunaAddComponent, TipovacunaEditComponent, TipovacunaGetComponent, FilterPipe, VeterinarioAddComponent, VeterinarioGetComponent, VeterinarioEditComponent, PropietarioAddComponent, PropietarioGetComponent, PropietarioEditComponent],
  imports: [
    CommonModule,
    AdminapiRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ]
 

})
export class AdminapiModule { }
