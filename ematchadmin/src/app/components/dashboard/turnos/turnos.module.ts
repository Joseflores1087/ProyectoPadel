import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { ListTurnosComponent } from './list-turnos/list-turnos.component';
import { NewTurnoComponent } from './new-turno/new-turno.component';


@NgModule({
  declarations: [ListTurnosComponent, NewTurnoComponent],
  imports: [
    CommonModule,
    TurnosRoutingModule
  ]
})
export class TurnosModule { }
