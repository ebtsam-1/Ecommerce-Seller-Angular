
import { HttpClient} from '@angular/common/http';
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
    return this.http.post(`${environment.apiURL}/login`,data)
  }
  logout()
  {
    this.http.get(environment.apiURL)
    localStorage.removeItem('sellerToken')
  }
  prepareUserData()
  {
    if(this.isLogedIn)
    {
      this.http.get(`${environment.apiURL}/role`).subscribe((res:any)=>{
        this.role=res.data.role[0]
      })
    }
  }
  get isLogedIn()
  {
    return !!localStorage.getItem('sellerToken')
  }
  getToken()
  {
    return localStorage.getItem('sellerToken')?localStorage.getItem('sellerToken'):false
  }

  register(data:object):Observable<any>{
    return this.http.post(`${environment.apiURL}/register`,data)
   }

   myProfile():Observable<any>{
    return this.http.get<User>(`${environment.apiURL}/myProfile`)
   }

   cities(cityID:number):Observable<City[]>{
    return this.http.get<City[]>(`${environment.apiURL}/governorate/${cityID}`)
   }

   governates():Observable<Governate[]>{
    return this.http.get<Governate[]>(`${environment.apiURL}/governorate`)
   }

   editProfile(data:object):Observable<any>{
    return this.http.post(`${environment.apiURL}/editprofile`,JSON.stringify(data))
   }

}
