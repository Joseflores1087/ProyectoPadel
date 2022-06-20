import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCanchaComponent } from './list-cancha/list-cancha.component';
import { NewCanchaComponent } from './new-cancha/new-cancha.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListCanchaComponent  },
      { path: 'NewCancha', component: NewCanchaComponent  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanchaRoutingModule { }
