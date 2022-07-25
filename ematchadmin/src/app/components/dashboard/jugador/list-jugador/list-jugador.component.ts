import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-list-jugador',
  templateUrl: './list-jugador.component.html',
  styleUrls: ['./list-jugador.component.css']
})
export class ListJugadorComponent implements OnInit {
  jugador: any;
  seguido: any;
  user = localStorage.getItem('user_id');
  constructor(private jug: JugadoresService) { }

  ngOnInit(): void {
    this.jug.GetJugadores(this.user).subscribe(res => {
      this.jugador = res;

    })
  }

  TraerSeguidos(id: number) {
    this.jug.GetSigo(id).subscribe(res => {
      console.log(res);
      this.seguido = res;
    })
  }

}
