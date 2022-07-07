import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { CanchasService } from 'src/app/services/canchas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-cancha',
  templateUrl: './list-cancha.component.html',
  styleUrls: ['./list-cancha.component.css']
})
export class ListCanchaComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  private destroy$ = new Subject<any>();
  constructor(private cancha: CanchasService) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '///cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json',
      }
    };
    this.cancha.GetCancha().subscribe((res: any) => {
      this.data = res;
      this.dtTrigger.next(res);
    });
  }

  DeleteCancha(cancha: number) {
    console.log(cancha);

  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  DelteCancha(cancha: number) {
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
        this.cancha.DeleteCancha(cancha)
          .pipe(takeUntil(this.destroy$))
          .subscribe(res => {
            this.cancha.GetCancha().subscribe((res: any) => {
              this.data = res;
            });
          })
      }
    })

  }
}
