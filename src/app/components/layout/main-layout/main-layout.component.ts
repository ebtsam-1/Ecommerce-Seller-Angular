import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor(private loader:LoaderService) { }
  loaderState=false
  ngOnInit(): void {
    this.loader.loaderState.subscribe(res=>{
      this.loaderState=res
    })
  }

}
