import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanchaRoutingModule } from './cancha-routing.module';
import { ListCanchaComponent } from './list-cancha/list-cancha.component';
import { NewCanchaComponent } from './new-cancha/new-cancha.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ListCanchaComponent, NewCanchaComponent],
  imports: [
    CommonModule,
    CanchaRoutingModule,
    SharedModule
  ]
})
export class CanchaModule { }
