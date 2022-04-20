import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) {

   }
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let loader=this.injector.get(LoaderService)
     loader.loader.next(true)
     return next.handle(req).pipe(
       finalize(()=>{
         loader.loader.next(false)
       })
     )
   }

}
