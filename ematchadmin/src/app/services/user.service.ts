import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:42000';

  GetUser() {
    return this.http.get(`${this.url}/api/usuario/GetUser`);
  }
}
