import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanchasService } from 'src/app/services/canchas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-cancha',
  templateUrl: './new-cancha.component.html',
  styleUrls: ['./new-cancha.component.css']
})
export class NewCanchaComponent implements OnInit {
  form: FormGroup;
  canchas: any;
  data: any;
  rol: any;
  constructor(private fb: FormBuilder,
    private user: UserService,
    private cancha: CanchasService,
    private router: Router) {

    this.form = new FormGroup({
      nombre_cancha: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      codigo_postal: new FormControl('', Validators.required),
      cantidad_canchas: new FormControl('', [Validators.required, Validators.email]),
      id_user: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.getUser();
  }

  newCancha() {
    const formValue = {
      nombre_cancha: this.form.value.nombre_cancha,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      codigo_postal: this.form.value.codigo_postal,
      cantidad_canchas: this.form.value.cantidad_canchas,
      id_user: this.form.value.id_user,
      logo: this.form.value.logo,
    }
    console.log(formValue)
    this.cancha.NewCancha(formValue).subscribe(res => {
      this.router.navigate(['/dashboard/canchas']);
      console.log('Exito');
    })

  }

getUser(){
  this.user.GetUser().subscribe(res=>{
    this.data= res;
  })
}

}

