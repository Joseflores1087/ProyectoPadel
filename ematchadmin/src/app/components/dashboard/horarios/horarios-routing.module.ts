import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHorariosComponent } from './list-horarios/list-horarios.component';
import { NewHorarioComponent } from './new-horario/new-horario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListHorariosComponent  },
      { path: 'newHorario', component: NewHorarioComponent  },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosRoutingModule { }
