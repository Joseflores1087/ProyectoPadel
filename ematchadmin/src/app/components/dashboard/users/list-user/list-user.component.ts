import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  private destroy$ = new Subject<any>();
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
    this.traerUser();
  }

  DelteUser(user:number){
    Swal.fire({
      title: 'Estás seguro?',
      text: "Una vez eliminado se perderán los Datos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ACEPTAR'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'Usuario Eliminado',
          'success'
        )
        this.user.DeleteUsers(user)
          .pipe(takeUntil(this.destroy$))
          .subscribe(res => {
            this.user.GetUser().subscribe((res: any) => {
              this.data = res;
             //this.dtTrigger.next(res);
            });
          })
      }
    })
    
  }
 
  EditUser(id:number){
    console.log(id);
    
  }

  traerUser(){
    this.user.GetUser().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      
      this.dtTrigger.next(res);
    });
  }

  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
