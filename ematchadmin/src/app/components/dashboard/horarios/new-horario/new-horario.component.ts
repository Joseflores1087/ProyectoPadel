import { Component, OnInit } from '@angular/core';
import { PredioService } from 'src/app/services/predio.service';
import { Predio } from 'src/app/interfaces/predio';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HorariosService } from 'src/app/services/horarios.service';
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

  constructor(private fb: FormBuilder,private predio: PredioService, private router: Router, private hora: HorariosService) {
    this.form = new FormGroup({
      dia: new FormControl(''),
      hora_desde: new FormControl(''),
      hora_hasta: new FormControl(''),

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

  newHorario(){
    const formValue = {
      dia: this.form.value.dia,
      hora_desde: this.form.value.hora_desde,
      hora_hasta: this.form.value.hora_hasta,
    }
    this.hora.AddHorario(formValue).subscribe(res => {
      this.router.navigate(['dashboard/horarios']);
      console.log('Exito');
    })
  }

}
