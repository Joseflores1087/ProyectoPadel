import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Canchas } from 'src/app/interfaces/cancha';
import { CanchasService } from 'src/app/services/canchas.service';
import { TurnosService } from 'src/app/services/turnos.service';


@Component({
  selector: 'app-list-turnos',
  templateUrl: './list-turnos.component.html',
  styleUrls: ['./list-turnos.component.css']
})
export class ListTurnosComponent implements OnInit {
  canchas: Canchas[] = [];
  Turno: any;
  private destroy$ = new Subject<any>();
  constructor(private turno: TurnosService, private predio: CanchasService) { }

  ngOnInit(): void {
    this.getCancha();
    this.turno.GetTurnos().subscribe((res: any) => {
      this.Turno = res;
    })
  }

  getCancha() {
    this.predio.GetCancha().subscribe((res: any) => {
      this.canchas = res;
      console.log(this.canchas);

    })
  }

}
