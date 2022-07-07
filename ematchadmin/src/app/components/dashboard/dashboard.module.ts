import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';

/**
 * Modulos
 */
import { UsersModule } from './users/users.module';
import { CanchaModule } from './cancha/cancha.module';
import { HorariosModule } from './horarios/horarios.module';
import { TurnosModule } from './turnos/turnos.module';
import { FooterComponent } from './footer/footer.component';
import { JugadorModule } from './jugador/jugador.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    
  

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    UsersModule,
    CanchaModule,
    HorariosModule,
    TurnosModule,
    JugadorModule
  ],
  exports: [SharedModule],
})
export class DashboardModule { }
