import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { CanchaRoutingModule } from './cancha-routing.module';
import { ListCanchaComponent } from './list-cancha/list-cancha.component';
import { NewCanchaComponent } from './new-cancha/new-cancha.component';


@NgModule({
  declarations: [ListCanchaComponent, NewCanchaComponent],
  imports: [
    CommonModule,
    CanchaRoutingModule,
    DataTablesModule
  ]
})
export class CanchaModule { }
