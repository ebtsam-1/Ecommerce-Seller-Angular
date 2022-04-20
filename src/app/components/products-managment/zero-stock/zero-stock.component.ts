import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-zero-stock',
  templateUrl: './zero-stock.component.html',
  styleUrls: ['./zero-stock.component.css']
})
export class ZeroStockComponent implements OnInit {

  page = 1;
  products: any;
  itemsPerPage = 30;
  totalItems : any;
  imageURL = environment.images

  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    this.getPage(this.page);
  }

  getPage(page:any) {
    console.log(page)
    this.productService.zeroStockProducts(+page).subscribe((res: any) => {
      this.products =  res.data.data;
      this.totalItems = res.total;
    })
  }

}
