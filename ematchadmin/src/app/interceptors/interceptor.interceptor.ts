import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (!token) {
      return next.handle(req);
    }
    const headers = req.clone({

      setHeaders: {
        'Authorization': `${token}`
      }
    });
    return next.handle(headers).pipe(
      catchError((error) => {
        return this.herrorHandler(error);
      })
    );
  }

  herrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      // if (error.error instanceof ErrorEvent){
      //   console.log('ERROR DE CLIENTE');
      //   this._snackBar.open('Saved successfully.', 'close', { duration: 5000, panelClass: 'successSnack' });
      //   }else{
      if (error.status === 401) {
        Swal.fire({
          title: 'Sesion Expirada',
          text: "Por favor Logueese Nuevamente!",
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          //cancelButtonColor: '#d33',
          confirmButtonText: 'ACEPTAR'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
        })
      }
    }
    return throwError(error)
  }


  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }
}
