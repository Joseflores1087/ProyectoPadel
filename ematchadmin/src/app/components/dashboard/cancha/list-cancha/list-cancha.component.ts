import { Component, OnDestroy,OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { CanchasService } from 'src/app/services/canchas.service';

@Component({
  selector: 'app-list-cancha',
  templateUrl: './list-cancha.component.html',
  styleUrls: ['./list-cancha.component.css']
})
export class ListCanchaComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  constructor(private cancha: CanchasService) { }


  ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        language:{
          url:'///cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json',
        }
    };
    this.cancha.GetCancha().subscribe((res: any) => {
      this.data = res;
      this.dtTrigger.next(res);
    });
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
