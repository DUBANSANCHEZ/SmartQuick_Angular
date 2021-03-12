import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { usersService } from '../../services/Users.service';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Value: any;

  loginForm: FormGroup;
  constructor(private UsersService:usersService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      Nombre: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-z]/)])],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {
  }
  login(form): void{
    this.Value = this.UsersService.authentication(form.value);
     if (this.Value === undefined)  {
      M.toast({
        html: `<div class="alert alert-danger" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
             <h4 class="alert-heading">FALLO AUTENTICACIÓN</h4>
             <p>El usuario no esta registrado</p>
             <hr>
         </div>`});
    }  else {
        if (this.Value.Rol === 'Administrador') {
            this.router.navigate(['deportista']);
          // tslint:disable-next-line:triple-equals
        } else if (this.Value.Rol === 'Coordinador') {
            this.router.navigate(['coordinador']);
        }
    }
  }
}
