import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:45001';

  login(userData: any) {
    return this.http.post(`${this.url}/api/auth/login`, userData);
  }
}
