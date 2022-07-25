import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:45001';

  GetJugadores(id:any) {
    return this.http.get(`${this.url}/api/jugador/GetJugador/${id}`);
  }

  GetSigo(id:number) {
    return this.http.get(`${this.url}/api/jugador/GetSeguidos/${id}`);
  }
  

}
