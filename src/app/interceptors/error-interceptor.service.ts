import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let router = this.injector.get(Router)
    return next.handle(req).pipe(
      catchError((err:HttpErrorResponse)=>{
        if(err.status==401||err.status==403)
        {
          localStorage.removeItem('sellerToken')
          router.navigate(['login'])
        }
        return throwError(
          ()=>new Error(err.message))
        })
    )
  }
}
