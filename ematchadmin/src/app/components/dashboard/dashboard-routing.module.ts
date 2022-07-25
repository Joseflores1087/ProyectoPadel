import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCanchaComponent } from './cancha/list-cancha/list-cancha.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './users/list-user/list-user.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./users/users.module').then(
            (x) => x.UsersModule
          ),
      },
      {
        path: 'canchas',
        loadChildren: () =>
          import('./cancha/cancha.module').then(
            (x) => x.CanchaModule
          ),
      },
      {
        path: 'turnos',
        loadChildren: () =>
          import('./turnos/turnos.module').then(
            (x) => x.TurnosModule
          ),
      }, 
      {
        path: 'horarios',
        loadChildren: () =>
          import('./horarios/horarios.module').then(
            (x) => x.HorariosModule
          ),
      },
      {
        path: 'jugador',
        loadChildren: () =>
          import('./jugador/jugador.module').then(
            (x) => x.JugadorModule
          ),
      },
      {
        path: 'newHorario',
        loadChildren: () =>
          import('./horarios/horarios.module').then(
            (x) => x.HorariosModule
          ),
      },
    
     
      // {
      //   path: 'informe',
      //   loadChildren: () =>
      //     import('./informe/informe.module').then(
      //       (x) => x.InformeModule
      //     ),

      // },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
