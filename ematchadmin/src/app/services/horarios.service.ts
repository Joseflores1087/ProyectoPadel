import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:45001';

  AddHorario(UserData:any){
    return this.http.post(`${this.url}/api/horario`, UserData);
  }


}
