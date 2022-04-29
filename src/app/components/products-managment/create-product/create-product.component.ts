import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {Category} from 'src/app/models/category';
import {ProductService} from 'src/app/services/product.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({});
  formData: FormData = new FormData()
  selectedFile: string | null = null;

  prodCreatForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private router: Router) {

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
      this.selectedFile = file.name;
      this.formData.append('image', file);
    }
  }

  create() {
    this.formData.append('name', this.name?.value);
    this.formData.append('description', this.description?.value);
    this.formData.append('category_id', this.category?.value);
    this.formData.append('quantity', this.quantity?.value);
    this.formData.append('discount', this.discount?.value);
    this.formData.append('price', this.price?.value);
    this.productService.productCreation(this.formData).subscribe(
      {
        next: (res) => {
          this.sweetalert('success', res.message)
          this.router.navigate(['/products'])
        },
        error: (err) => {
          alert(JSON.stringify(err))
          this.sweetalert('error', 'Failed')
        }
      })
  }

  sweetalert(type: any, msg: any) {
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      title: msg,
      icon: type,
      background: '#404040',
      color: '#FFFFFF'
    })
  }


}
