import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:42000';

  GetCancha(){
    return this.http.get(`${this.url}/api/cancha/GetCancha`);
  }

  NewCancha(CanchaData:any){
    return this.http.post(`${this.url}/api/cancha/NewCancha`, CanchaData);
  }
}
