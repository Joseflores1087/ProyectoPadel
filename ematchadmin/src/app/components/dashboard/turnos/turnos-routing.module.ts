import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTurnosComponent } from './list-turnos/list-turnos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListTurnosComponent  },
      //{ path: 'NewTurno', component: NewCanchaComponent  },
    ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
