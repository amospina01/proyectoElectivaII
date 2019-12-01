import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from './login.service';
import Swal  from 'sweetalert2';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

    public loading = false;

    constructor(private router: Router,
        private route: ActivatedRoute, private loginService :LoginService) { }

    ngOnInit()  {}
    
    
    // On Forgot password link click
    public onForgotPassword() {
        this.loading = true;
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
        this.loading = true;
    }

    // On registration link click
    public onRegister() {
        this.loading = true;
        this.router.navigate(['registro'], { relativeTo: this.route.parent });
        this.loading = true;
    }

    public login(userLogin: NgForm) {
        this.loading = true;
        const formLogin = {
          email: userLogin.form.value.user,
          password: userLogin.form.value.password
        }

        this.loginService.loginValidado(formLogin).subscribe(dataFinal => {
            this.loading = true;
            if (dataFinal.token) {
              const tokenCifrado = this.loginService.cifrarToken(dataFinal.token)
              sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
              this.router.navigate(['/components/carousel'])
              this.loading = false;
            }
          },
            error => {

                this.loading = true;
                Swal.fire({
                    title: 'Algo va mal',
                    text: error.Errors.message,
                    icon: 'warning',
                    confirmButtonText: 'Quiero volverlo a intentar'
                })
             
                             
              this.loading = false;
            });
          this.loading = false;
          
        }

        
    }


    

    


