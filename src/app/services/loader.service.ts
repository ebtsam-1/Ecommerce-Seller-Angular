import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loader:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false)
  constructor() { }
  get loaderState()
  {
    return this.loader.asObservable()
  }
}
