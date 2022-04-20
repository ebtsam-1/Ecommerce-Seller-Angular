
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth=this.injector.get(AuthService)
    console.log(req.url);
    if(req.url == 'http://localhost:8000/api/signup')
    {
      let token=req.clone({
        setHeaders:{
          Authorization:`Bearer ${auth.getToken()}`,
          Accept:'application/json',
          // 'Content-Type': 'application/json'
        }
      })
      return next.handle(token)
    }else{

      let token=req.clone({
        setHeaders:{
          Authorization:`Bearer ${auth.getToken()}`,
          Accept:'application/json',
          'Content-Type': 'application/json'
        }
      })
      return next.handle(token)
    }
  }
}
