import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Governate } from '../models/governate';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {};
  constructor(private httpClient:HttpClient
  ) {
    this.httpOptions =  {headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Accept':'application/json'

      })
    };
  }
  register(data:object):Observable<any>{
    return this.httpClient.post(`${environment.apiURL}/register`,data,this.httpOptions)
   }

   myProfile():Observable<any>{
    return this.httpClient.get<User>(`${environment.apiURL}/myProfile`)
   }

   cities(cityID:number):Observable<City[]>{
    return this.httpClient.get<City[]>(`${environment.apiURL}/governorate/${cityID}`)
   }

   governates():Observable<Governate[]>{
    return this.httpClient.get<Governate[]>(`${environment.apiURL}/governorate`)
   }

   editProfile(data:object):Observable<any>{
    return this.httpClient.post(`${environment.apiURL}/editprofile`,JSON.stringify(data))
   }

   getToken()
   {
     return localStorage.getItem('userToken')||''
   }
}
