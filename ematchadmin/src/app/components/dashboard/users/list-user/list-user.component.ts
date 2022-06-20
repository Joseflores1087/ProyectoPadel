import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  constructor(private user: UserService) { }


  ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        language:{
          url:'///cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json',
        }

    };
    this.user.GetUser().subscribe((res: any) => {
      this.data = res;
      this.dtTrigger.next(res);
    });
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
