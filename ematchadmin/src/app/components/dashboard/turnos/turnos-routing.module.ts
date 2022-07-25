import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTurnosComponent } from './list-turnos/list-turnos.component';
import { NewTurnoComponent } from './new-turno/new-turno.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListTurnosComponent  },
      { path: 'NewTurno', component: NewTurnoComponent },
    ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
