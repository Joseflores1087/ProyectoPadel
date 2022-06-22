import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { ListHorariosComponent } from './list-horarios/list-horarios.component';


@NgModule({
  declarations: [ListHorariosComponent],
  imports: [
    CommonModule,
    HorariosRoutingModule
  ]
})
export class HorariosModule { }
