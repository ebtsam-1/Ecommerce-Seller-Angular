import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})

export class AvailableComponent implements OnInit{

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
    this.productService.availableProducts(+page).subscribe((res: any) => {
      this.products =  res.data.data;
      this.totalItems = res.data.total;
      this.itemsPerPage = res.data.per_page;
    })
  }

}
