import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasGuard } from 'src/app/guards/rutas.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListUserComponent, canActivate: [ RutasGuard ]   },
      { path: 'NewUser', component: NewUserComponent,canActivate: [ RutasGuard ]  },
      { path: 'EditUser/:id', component: EditUserComponent,canActivate: [ RutasGuard ]  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
