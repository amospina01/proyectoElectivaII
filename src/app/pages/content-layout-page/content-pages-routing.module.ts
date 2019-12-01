import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroComponent } from './registro/registro.component'



const routes: Routes = [
  {
    path: 'login',
     component: LoginPageComponent,
    data: {
      title: 'Login page'
    },    
  },
  {
    path: 'registro',
     component: RegistroComponent,
    data: {
      title: 'Registro'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
