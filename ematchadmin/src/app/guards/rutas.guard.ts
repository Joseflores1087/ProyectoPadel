import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RutasGuard implements CanActivate {
  token: any;
  rol= localStorage.getItem('user_rol')
  constructor(public auth: AuthService,private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.Logged && this.rol=='1' ){
        return true;
      }else{
        Swal.fire({
          title: 'No está autorizado para ingresar',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'ACEPTAR'
        }),
        this.router.navigate(['login']);
        return false; 
      }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigate(['login']);
      return false; 
    }
  }  
  
}
