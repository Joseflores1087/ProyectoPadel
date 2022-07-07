import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get Logged(): boolean {
    const user = localStorage.getItem('token')!;
    return user !== 'null' ? true : false;
  }
}
