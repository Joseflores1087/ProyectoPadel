import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { ListHorariosComponent } from './list-horarios/list-horarios.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { NewHorarioComponent } from './new-horario/new-horario.component'; // a plugin!
import { SharedModule } from '../../shared/shared.module';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [ListHorariosComponent, NewHorarioComponent],
  imports: [
    CommonModule,
    HorariosRoutingModule,
    FullCalendarModule,
    SharedModule
  
  ]
})
export class HorariosModule { }
