import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dataSource : Product[] |null =null;
  // displayedColumns: string[] = ['id','image','name','price','discount','category_name','description','available'];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.products().subscribe(res=>{
      this.dataSource = res.data.data
      console.log(this.dataSource)
    })
  }

}
