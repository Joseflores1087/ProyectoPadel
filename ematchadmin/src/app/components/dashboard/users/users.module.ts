import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [ ListUserComponent, NewUserComponent, EditUserComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule, SharedModule
  ]
})
export class UsersModule { }
