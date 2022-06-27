import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Usuario } from 'src/app/interfaces/user';
import { CanchasService } from 'src/app/services/canchas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  usuario: Usuario[] = [];
  form: FormGroup;
  canchas: any;
  estado:any;
  rol: any;
  rolSel: any;
  
  constructor(private fb: FormBuilder,
    private user: UserService,
    private cancha: CanchasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
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
    const params = this.activatedRoute.snapshot.params['id'];
    console.log(params);
    this.user.GetUserbyId(params).subscribe((usuario) => {
      this.estado = usuario[0].id_cancha;
      this.rolSel = usuario[0].id_rol;
      this.form.patchValue({
        nombre: usuario[0].nombre,
        apellido: usuario[0].apellido,
        dni: usuario[0].dni,
        celular: usuario[0].celular,
        correo: usuario[0].correo,
        id_cancha: usuario[0].id_cancha,
        id_rol: usuario[0].id_rol,
        password: usuario[0].password,
      })
     
    })
    this.GetCanchas();
    this.GetRol();

  }

  GetCanchas(){
    this.cancha.GetCancha().subscribe((res: any) => {
      this.canchas= res;
      console.log(res);
      
    })
  }

GetRol():any{
  this.user.GetRol().subscribe((res: any) => {
    this.rol= res;
    console.log(this.rol);
    
  })
}
  
  


  editarUser() {
    // const formValue = {
    //   nombre: this.form.value.nombre,
    //   apellido: this.form.value.apellido,
    //   dni: this.form.value.dni,
    //   celular: this.form.value.celular,
    //   correo: this.form.value.correo,
    //   id_cancha: this.form.value.id_cancha,
    //   id_rol: this.form.value.id_rol,
    //   password: this.form.value.password,
    // }
    // this.user.AddUser(formValue).subscribe(res => {
    //   this.router.navigate(['dashboard/usuarios']);
    //   console.log('Exito');
    // })

  }

}
