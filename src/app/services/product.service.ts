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

  productCreation(data: object): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiSellerURL}/products`, data);
  }

  products(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products`);
  }

  availableProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/available`);
  }

  unavailableProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/unavailable`);
  }

  zeroStockProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/zero-stock`);
  }

  productDetails(ID: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiSellerURL}/products/${ID}`);
  }

  productUpdate(id: number, data: object): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiSellerURL}/products/${id}`, JSON.stringify(data));

  }
}
