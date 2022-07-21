import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
@Component({
  selector: 'app-list-horarios',
  templateUrl: './list-horarios.component.html',
  styleUrls: ['./list-horarios.component.css']
})
export class ListHorariosComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    locales: [esLocale],
    locale: 'es',
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    // dateClick: this.handleDateClick.bind(this), // bind is important!
    // events: [
    //   { title: 'event 1', date: '2019-04-01' },
    //   { title: 'event 2', date: '2019-04-02' }
    // ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }

}
