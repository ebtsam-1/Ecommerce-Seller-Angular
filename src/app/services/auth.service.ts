import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

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
}
