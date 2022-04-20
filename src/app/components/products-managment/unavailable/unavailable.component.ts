import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrls: ['./unavailable.component.css']
})
export class UnavailableComponent implements OnInit {

  dataSource : Product[] |null =null;
  // displayedColumns: string[] = ['id','image','name','price','discount','category_name','description','available'];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.unavailableProducts().subscribe(res=>{
      this.dataSource = res.data.data
      console.log(this.dataSource)
    })
  }

}
