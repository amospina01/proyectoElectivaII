import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        LoginPageComponent,
        RegistroComponent
    ]
})
export class ContentPagesModule { }
