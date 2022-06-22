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
}
