import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private login: LoginService) {
    this.form = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const parametros = {
      correo: this.form.value.correo,
      password: this.form.value.password,
    }
    this.login.login(parametros).subscribe((res: any) => {

      if (res['ok']) {
        
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_rol', res.user_rol);
        console.log('Capo entraste');
        this.router.navigate(['dashboard']);
        
        //this.fakeLoading();
      } else {
        //this.error();
        console.log('no éxito');
      }

    })
  }

  // error() {
  //   this._snackBar.open('Usuario o Password incorrectos', '', {
  //     duration: 2500,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom'
  //   })
  // }

  // fakeLoading() {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.router.navigate(['dashboard'])
  //   }, 1500)
  // }

}
