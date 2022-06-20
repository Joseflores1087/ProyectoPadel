import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-cancha',
  templateUrl: './list-cancha.component.html',
  styleUrls: ['./list-cancha.component.css']
})
export class ListCanchaComponent implements  OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    $('#example').DataTable({
      pagingType: 'full_numbers',
      pageLength: 10,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/es-AR.json'
      }
    });
  };
 
}



