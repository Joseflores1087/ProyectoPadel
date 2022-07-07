import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJugadorComponent } from './list-jugador/list-jugador.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListJugadorComponent },
      //{ path: 'NewTurno', component: NewCanchaComponent  },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadorRoutingModule { }
