import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancha } from '../interfaces/cancha';
@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:42000';

  GetCancha(){
    return this.http.get(`${this.url}/api/cancha/GetCancha`);
  }

  GetCanchaById(id:any): Observable<Cancha[]>{
    return this.http.get<Cancha[]>(`${this.url}/api/cancha/GetCanchaById/${id}`);
  }

  NewCancha(CanchaData:any){
    return this.http.post(`${this.url}/api/cancha/NewCancha`, CanchaData);
  }

  DeleteCancha(id:number){
    return this.http.delete(`${this.url}/api/cancha/DeleteCancha/${id}`)
  }
}
