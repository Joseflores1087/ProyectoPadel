import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadorRoutingModule } from './jugador-routing.module';
import { ListJugadorComponent } from './list-jugador/list-jugador.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListJugadorComponent
  ],
  imports: [
    CommonModule,
    JugadorRoutingModule,
    SharedModule
  ]
})
export class JugadorModule { }
