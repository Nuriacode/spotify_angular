 import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  formLogin : FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _authService: AuthService, private cookie: CookieService, private _router: Router){}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ])
      })
  };

  sendLogin():void{
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password)
      .subscribe({
        next: (responseOk) => {
          console.log('sesion iniciada correctamente', responseOk);
          const { tokenSession } = responseOk;
          this.cookie.set('token', tokenSession, 4, '/');
          this._router.navigate(['/', 'tracks']);
        },
        error: (err) => {
          this.errorSession = true;
          console.log('Ocurrió un error con tu usuario');
        }
      });
  };

}
