
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public role:string=''
  constructor(private http:HttpClient) { }


  login(data:any)
  {
    return this.http.post(`${environment.apiSellerURL}/login`,data)
  }
  // logout()
  // {
  //   this.http.get(environment.apiURL)
  //   localStorage.removeItem('sellerToken')
  // }
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
    return this.http.post(`${environment.apiSellerURL}/register`,data)
   }

   myProfile():Observable<any>{
    return this.http.get(`${environment.apiURL}/myProfile`)
   }

   cities():Observable<any>{
    return this.http.get(`${environment.apiURL}/city`)
   }

   governates():Observable<any>{
    return this.http.get(`${environment.apiURL}/governorate`)
   }

   editProfile(data:object):Observable<any>{
    return this.http.post(`${environment.apiURL}/editprofile`,data)
   }

   logout()
   {
     return this.http.get(`${environment.apiURL}/logout`)
   }

}
