import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient
  ) {
  }

  CategoryAll(): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/category`);

  }

  productCreation(data: object): Observable<any>{
    return this.httpClient.post(`${environment.apiSellerURL}/products`, data);
  }

  products(page:number = 1): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products?page=${page}`);
  }

  availableProducts(page:number = 1): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/available?page=${page}`);
  }

  unavailableProducts(page:number = 1): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/unavailable?page=${page}`);
  }

  zeroStockProducts(page:number = 1): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/zero-stock?page=${page}`);
  }

  productDetails(ID: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/${ID}`);
  }

  productUpdate(id: number, data: object): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiSellerURL}/products/${id}`, data);
  }

  productDelete(ID: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiSellerURL}/products/${ID}`);
  }
}
