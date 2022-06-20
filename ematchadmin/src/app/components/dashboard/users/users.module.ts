import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [ ListUserComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule, SharedModule
  ]
})
export class UsersModule { }
