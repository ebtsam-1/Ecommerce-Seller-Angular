import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  prodCreatForm: FormGroup;
  categories:Category[] = [];
  constructor(private fb: FormBuilder,
    private productService:ProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {

      this.prodCreatForm = this.fb.group({
        name: ['', [Validators.required]],
        category_id: ['', [Validators.required]],
        description: ['', [Validators.required]],
        quantity: ['',[Validators.required]],
        price: ['',[Validators.required]],
        discount: ['',[Validators.required]],
      });
    }

  ngOnInit(): void {
    this.productService.CategoryAll().subscribe(res=>{
         this.categories = res.data;

         console.log(this.categories);
    })
  }

  get name() {
    return this.prodCreatForm.get('name');
  }
  get category() {
    return this.prodCreatForm.get('category_id');
  }
  get description() {
    return this.prodCreatForm.get('description');
  }
  get quantity() {
    return this.prodCreatForm.get('quantity');
  }
  get price() {
    return this.prodCreatForm.get('price');
  }
  get discount() {
    return this.prodCreatForm.get('discount');
  }


  create(){

    let prodModel = {
      name: this.prodCreatForm.value.name,
      category_id: this.prodCreatForm.value.category_id,
      description: this.prodCreatForm.value.description,
      quantity: this.prodCreatForm.value.quantity,
      price: this.prodCreatForm.value.price,
      discount: this.prodCreatForm.value.discount,
     }

     console.log(JSON.stringify(prodModel));

    this.productService.productCreation(prodModel).subscribe(
      data =>{
        console.log(data)
        // let userToken = data.data.token;
        // localStorage.setItem('userToken',userToken);
        // this.router.navigate(['home',data.data.name]);
      },
      error =>{
        // this.router.navigate(['register',error.error['message']]);
        console.log(error);
      });
  }


}
