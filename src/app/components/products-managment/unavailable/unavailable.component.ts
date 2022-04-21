import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrls: ['./unavailable.component.css']
})
export class UnavailableComponent implements OnInit {

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
    this.productService.unavailableProducts(+page).subscribe((res: any) => {
      this.products =  res.data.data;
      this.totalItems = res.total;
    })
  }

}
