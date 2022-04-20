import { Component, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-zero-stock',
  templateUrl: './zero-stock.component.html',
  styleUrls: ['./zero-stock.component.css']
})
export class ZeroStockComponent implements OnInit {

  dataSource : Product[] |null =null;
  // displayedColumns: string[] = ['id','image','name','price','discount','category_name','description','available'];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.zeroStockProducts().subscribe(res=>{
      this.dataSource = res.data.data
      console.log(this.dataSource)
    })
  }

}
