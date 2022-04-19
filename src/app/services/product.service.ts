import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpOptions = {};
  constructor(private httpClient:HttpClient
  ) {
    this.httpOptions =  {headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Accept':'application/json'
       ,'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      })};

   }

   CategoryAll(): Observable<any>{
     return this.httpClient.get(`${environment.apiURL}/category`, this.httpOptions);

   }

   productCreation(data:object):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiURL}/seller/products`,data,this.httpOptions);
   }

   products():Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/seller/products`,this.httpOptions);
   }

   productDetails(ID:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/seller/products/${ID}`,this.httpOptions);
   }

   productUpdate(id:number, data:object):Observable<any>
{
  return this.httpClient.put<any>(`${environment.apiURL}/seller/products/${id}`,JSON.stringify(data),this.httpOptions);

}}
