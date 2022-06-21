import { Component, OnInit } from '@angular/core';
import { CanchasService } from 'src/app/services/canchas.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  canchas: any;
  constructor(private cancha: CanchasService) { }

  ngOnInit(): void {
    this.cancha.GetCancha().subscribe((res: any) => {
      this.canchas = res;
    })
  }

}
