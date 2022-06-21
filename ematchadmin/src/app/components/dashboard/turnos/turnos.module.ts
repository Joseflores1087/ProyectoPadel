import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { ListTurnosComponent } from './list-turnos/list-turnos.component';


@NgModule({
  declarations: [ListTurnosComponent],
  imports: [
    CommonModule,
    TurnosRoutingModule
  ]
})
export class TurnosModule { }
