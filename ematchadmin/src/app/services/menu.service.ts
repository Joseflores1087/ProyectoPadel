import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  
  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('assets/data/menu.json');
  }

  getMenuUser(): Observable<Menu[]>{
    return this.http.get<Menu[]>('assets/data/menu-user.json');
  }

  getMenuSuperAdmin(): Observable<Menu[]>{
    return this.http.get<Menu[]>('assets/data/menu-admin.json');
  }
  // getMenuJefe(): Observable<Menu[]>{
  //   return this.http.get<Menu[]>('assets/data/menu-jefe.json');
  // }

}
