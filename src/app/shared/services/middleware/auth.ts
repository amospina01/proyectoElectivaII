import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../../pages/content-layout-page/login-page/login.service';

export class Auth implements CanActivate {

    constructor(
      public router: Router,
      public loginSerice: LoginService
    ) {}
  
    canActivate () {
      if (this.loginSerice.estaLogueado()) {
        return true;
      } else {
        this.router.navigate(['/login'])
        sessionStorage.clear();
        return false;
      }
    }
  }
  