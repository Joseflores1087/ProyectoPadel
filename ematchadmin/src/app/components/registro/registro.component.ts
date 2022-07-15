import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  
  constructor(private fb: FormBuilder,) { 
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
  }

  newUser(){

  }

}
