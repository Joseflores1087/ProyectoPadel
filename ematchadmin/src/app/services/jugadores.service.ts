import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:42000';

  GetJugadores() {
    return this.http.get(`${this.url}/api/jugador/GetJugador`);
  }

  GetSigo(id:number) {
    return this.http.get(`${this.url}/api/jugador/GetSeguidos/${id}`);
  }
  

}
