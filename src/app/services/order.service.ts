// noinspection JSUnusedGlobalSymbols

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {



  constructor(private httpClient: HttpClient) {


  }

  picked(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiSellerURL}/orders/picked?page=${page}`)
  }

  pending(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiSellerURL}/orders/pending?page=${page}`)
  }

  allOrders(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiSellerURL}/orders?page=${page}`)
  }

  fulfilled(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiSellerURL}/payments/fulfilled?page=${page}`)
  }

  unfulfilled(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiSellerURL}/payments/unfulfilled?page=${page}`)
  }
}
