import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanchasService } from 'src/app/services/canchas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  canchas: any;
  rol: any;
  rolSec: any;

  constructor(private fb: FormBuilder,
    private user: UserService,
    private cancha: CanchasService,
    private router: Router) {

    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      id_cancha: new FormControl('', Validators.required),
      id_rol: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    })
  }

  ngOnInit(): void {
    this.GetCanchas(),
    this.GetRoles()


  }

  newUser() {
    const formValue = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      dni: this.form.value.dni,
      celular: this.form.value.celular,
      correo: this.form.value.correo,
      id_cancha: this.form.value.id_cancha,
      id_rol: this.form.value.id_rol,
      password: this.form.value.password,
    }
    // console.log(formValue)
    this.user.AddUser(formValue).subscribe(res => {
      this.router.navigate(['dashboard/usuarios']);
      console.log('Exito');
    })

  }

GetCanchas(){
  this.cancha.GetCancha().subscribe((res: any) => {
    this.canchas = res;
  })
}

  GetRoles() {
    this.user.GetRol().subscribe((res: any) => {
      console.log(res[0].nombre);
      this.rol = res;
    })
  }

}
