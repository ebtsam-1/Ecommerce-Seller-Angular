import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Ecommerce-Seller-Angular';
  loaderState=false
  constructor(private auth:AuthService,private loader:LoaderService)
  {
    this.auth.prepareUserData();
  }
  ngOnInit(): void {
    this.loader.loaderState.subscribe(res=>{
      this.loaderState=res
    })
  }
}
