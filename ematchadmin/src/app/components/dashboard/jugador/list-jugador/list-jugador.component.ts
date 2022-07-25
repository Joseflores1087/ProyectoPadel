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
  constructor(private jug: JugadoresService) { }

  ngOnInit(): void {
    this.jug.GetJugadores().subscribe(res => {
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
