import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  dataSource : Product[] |null =null;
  // displayedColumns: string[] = ['id','image','name','price','discount','category_name','description','available'];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.availableProducts().subscribe(res=>{
      this.dataSource = res.data.data
      console.log(this.dataSource)
    })
  }

}
