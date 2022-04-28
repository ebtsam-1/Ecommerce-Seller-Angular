import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {ProductService} from 'src/app/services/product.service';
import {environment} from 'src/environments/environment';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  modalFlag = false;
  message: string | null = null

  page = 1;
  itemsPerPage = 30;
  totalItems: any;
  imageURL = environment.images

  dataSource: any;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute, private Router: Router,
   ) {


  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.message = (paramMap.get('message')) ? this.activatedRoute.snapshot.paramMap.get('message') : '';
    })

    this.getPage(this.page);
  }

  getPage(page: any) {
    console.log(page)
    this.productService.products(+page).subscribe(res => {
      this.dataSource = res.data.data
      this.totalItems = res.data.total;
      this.itemsPerPage = res.data.per_page;
      console.log(this.dataSource)
    })
  }


  deleteProduct(ID: number) {

    if (confirm('Are You Sure!')) {
    this.productService.productDelete(ID).subscribe(data => {
      console.log('done')




    }, err => {

      console.log(err);
    })
    }
  }

}
