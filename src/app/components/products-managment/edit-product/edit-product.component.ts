import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  prodID : number = 0;

  formData: FormData = new FormData()
  selectedFile: string | null = null;

  prodCreatForm: FormGroup
  categories: Category[] = [];
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.prodCreatForm = this.fb.group({
      name: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.productService.CategoryAll().subscribe(res => {
      this.categories = res.data;
      console.log(this.categories);
    })

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.prodID = (paramMap.get('id'))?Number(this.activatedRoute.snapshot.paramMap.get('id')):0;

      this.productService.productDetails( this.prodID).subscribe((ele:any)=>{

        this.prodCreatForm.setValue({
         name: ele.data.name,
         category_id:ele.data.category_id,
         description: ele.data.description,
         quantity:ele.data.quantity,
         price:ele.data.price,
         discount:ele.data.discount,
        });

        console.log(this.prodCreatForm.value)
      })

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

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      console.log(file);
      this.selectedFile = file.name;
      this.formData.append('image', file);
      console.log(this.formData);
    }
  }

  update() {

      //  this.formData.set('name', this.name?.value);
      //   this.formData.set('description', this.description?.value);
      //   this.formData.set('category_id', this.category?.value);
      //   this.formData.set('quantity',this.quantity?.value);
      //   this.formData.set('discount',this.discount?.value);
      //   this.formData.set('price',this.price?.value);
      //  console.log(this.name?.value);

      let productModel = {
        name: this.prodCreatForm.value.name,
        description: this.prodCreatForm.value.description,
        category_id: this.prodCreatForm.value.category_id,
        quantity: this.prodCreatForm.value.quantity,
        price: this.prodCreatForm.value.price,
        discount: this.prodCreatForm.value.discount,
       }

       console.log(productModel);
    this.productService.productUpdate(this.prodID, productModel).subscribe(
      data => {
        console.log(data)
        // let userToken = data.data.token;
        // localStorage.setItem('userToken',userToken);
        // this.router.navigate(['home',data.data.name]);
      },
      error => {
        // this.router.navigate(['register',error.error['message']]);
        console.log(error);
      });
  }


}
