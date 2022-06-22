import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHorariosComponent } from './list-horarios/list-horarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListHorariosComponent  },
      //{ path: 'NewTurno', component: NewCanchaComponent  },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosRoutingModule { }
