// noinspection JSUnusedGlobalSymbols

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Accept': ' application/json'
        ,'Authorization': `Bearer ${localStorage.getItem('userToken')}`
      })
    };
  }

  picked(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/orders/picked?page=${page}`, this.httpOptions)
  }

  pending(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/orders/pending?page=${page}`, this.httpOptions)
  }

  allOrders(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/orders?page=${page}`, this.httpOptions)
  }

  fulfilled(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/payments/fulfilled?page=${page}`, this.httpOptions)
  }

  unfulfilled(page: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/payments/unfulfilled?page=${page}`, this.httpOptions)
  }


}
