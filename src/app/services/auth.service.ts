
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
  public role:string=''
  constructor(private http:HttpClient) { }


  login(data:any)
  {
    return this.http.post(`http://localhost:8000/api/login`,data)
  }
  logout()
  {
    this.http.get(`http://localhost:8000/api/logout`)
    localStorage.removeItem('salerToken')
  }
  prepareUserData()
  {
    if(this.isLogedIn)
    {
      this.http.get(`http://localhost:8000/api/role`).subscribe((res:any)=>{
        this.role=res.data.role[0]
      })
    }
  }
  get isLogedIn()
  {
    return localStorage.getItem('salerToken')?true:false
  }
  getToken()
  {
    return localStorage.getItem('salerToken')?localStorage.getItem('salerToken'):false
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

}
