import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  imageURL = environment.images
  prodID : number = 0;
  public  uploader : FileUploader = new FileUploader({});
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
      image: [''],
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
         image:ele.data.image,
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

  get image() {
    return this.prodCreatForm.get('image');
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

       this.formData.set('name', this.name?.value);
        this.formData.set('description', this.description?.value);
        this.formData.set('category_id', this.category?.value);
        this.formData.set('quantity',this.quantity?.value);
        this.formData.set('discount',this.discount?.value);
        this.formData.set('price',this.price?.value);
       console.log(this.name?.value);

      // let productModel = {
      //   name: this.prodCreatForm.value.name,
      //   description: this.prodCreatForm.value.description,
      //   category_id: this.prodCreatForm.value.category_id,
      //   quantity: this.prodCreatForm.value.quantity,
      //   price: this.prodCreatForm.value.price,
      //   discount: this.prodCreatForm.value.discount,
      //  }

    this.productService.productUpdate(this.prodID, this.formData).subscribe(
      data => {
        console.log(data)
         this.router.navigate(['product', 'Successfully updated'])
      },
      error => {
        this.router.navigate(['product', 'Failed to update the product'])
        console.log(error);
      });
  }


}
