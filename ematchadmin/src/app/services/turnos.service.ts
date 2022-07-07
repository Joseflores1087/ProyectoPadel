import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:42000';

  GetTurnos(){
    return this.http.get(`${this.url}/api/turnos/GetTurno`);
  }
  NewTurnos(){
    return this.http.get(`${this.url}/api/turnos/NewTurno`);
  }
  DelTurnos(){
    return this.http.get(`${this.url}/api/turnos/DeleteTurno`);
  }
  GetTurnosbyid(){
    return this.http.get(`${this.url}/api/turnos/GetTurnoById`);
  }




}
