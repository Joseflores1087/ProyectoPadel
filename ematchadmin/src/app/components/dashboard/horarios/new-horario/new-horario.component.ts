import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { Predio } from 'src/app/interfaces/predio';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-horario',
  templateUrl: './new-horario.component.html',
  styleUrls: ['./new-horario.component.css']
})
export class NewHorarioComponent implements OnInit {
  lista: number[] = [0];
  predios: any;
  id = localStorage.getItem('user_id');;
  user = localStorage.getItem('user_id');
  form: FormGroup;

  constructor(private fb: FormBuilder,private predio: PredioService) {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      dni: new FormControl(''),
      celular: new FormControl(''),
      correo: new FormControl(''),
      id_cancha: new FormControl(''),
      id_rol: new FormControl(''),
      password: new FormControl(''),

    })
  }


  ngOnInit(): void {
    this.traerPredioByid(this.id);
  }

  traerPredio() {
    this.predio.GetPredio().subscribe(res => {
      this.predios = res;
      console.log(res);

    })
  }

  traerPredioByid(id: any) {
    this.predio.GetPredioByid(id).subscribe(res => {
      this.predios = res;
      console.log(res);

    })
  }


}
