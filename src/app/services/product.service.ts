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

  
  constructor(private httpClient:HttpClient
  ) {}

   CategoryAll(): Observable<any>{
     return this.httpClient.get(`${environment.apiURL}/category`);

   }

   productCreation(data:object):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiURL}/seller/products`,data);
   }

   products():Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/seller/products`);
   }

   productDetails(ID:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/seller/products/${ID}`);
   }

   productUpdate(id:number, data:object):Observable<any>
{
  return this.httpClient.put<any>(`${environment.apiURL}/seller/products/${id}`,JSON.stringify(data));

}}
