import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  url = 'http://localhost:45001';

  GetUser() {
    return this.http.get(`${this.url}/api/usuario/GetUser`);
  }

  GetUserbyId(id:any): Observable<Usuario[]>{
    return this.http
      .get<Usuario[]>(`${this.url}/api/usuario/GetUserById/${id}`)
  }

  AddUser(UserData:any){
    return this.http.post(`${this.url}/api/usuario/NewUser`, UserData);
  }
  
  EditUsers(UserData:any, id:number){
    return this.http.post(`${this.url}/api/usuario/EditUser/${id}`, UserData);
  }

  DeleteUsers(id:number){
    return this.http.delete(`${this.url}/api/usuario/DeleteUser/${id}`)
  }

  GetRol(){
    return this.http.get(`${this.url}/api/usuario/GetRol`);
  }
}
