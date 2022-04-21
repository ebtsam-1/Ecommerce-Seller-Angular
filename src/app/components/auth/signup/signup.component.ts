import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { City } from 'src/app/models/city';
import { Governate } from 'src/app/models/governate';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public  uploader : FileUploader = new FileUploader({});
  formData : FormData = new FormData()
  selectedFile :string | null= null;
  RegisterationForm: FormGroup;

  governates : Governate[] = [];
  cities : City[]= [];
  governateID: number = 0;
  errorMessage: number | string | null = 0

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router,
    private activatedRoute:ActivatedRoute,) {

this.RegisterationForm = this.fb.group({
name: ['', [Validators.required]],
email: ['', [Validators.required]],
phone: ['', [Validators.required]],
city: ['',[Validators.required]],
governate: ['',[Validators.required]],
address: ['',[Validators.required]],
password: ['', [Validators.required, Validators.minLength(8)]],
confirmPassword: ['', [Validators.required]],
},
{validators: this.passwordMatch()}
);

}

  ngOnInit(): void {
    //  Governates import
    this.authService.governates().subscribe(res=>{
      console.log(res);
      this.governates = res;
      console.log(this.governateID);

    })
  }

   // Cities importing
   onChange(event:any)
   {

    this.governateID = event.target.value;
    console.log(this.governateID);
     this.authService.cities(+this.governateID).subscribe(res=>{
      console.log(res);
      this.cities = res;
      // console.log(this.cities)
    })

   }
     // Errors Handling---------------

     get name() {
      return this.RegisterationForm.get('name');
    }

    get email() {
      return this.RegisterationForm.get('email');
    }

    get phone() {
      return this.RegisterationForm.get('phone');
    }
    get city() {
      return this.RegisterationForm.get('city');
    }

    get address() {
      return this.RegisterationForm.get('address');
    }

    get password() {
      return this.RegisterationForm.get('password');
    }

    get confirmPassword() {
      return this.RegisterationForm.get('confirmPassword');
    }

    // Custom Validations-------------------


    passwordMatch(): ValidatorFn {
      return (frmGroup: AbstractControl): ValidationErrors | null => {
        let passControl= frmGroup.get('password');
        let confirmPassControl= frmGroup.get('confirmPassword');
        if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
          return null;

        let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
        return (passControl?.value==confirmPassControl?.value)? null : valErr;
      }
    }

 onFileSelect(event:any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0] as File;
    console.log(file);
    this.selectedFile = file.name;
    this.formData.append('avatar', file);
    console.log(this.formData);
  }
}

    registerUser(){

      // let userModel = {
      //   name: this.RegisterationForm.value.name,
      //   email: this.RegisterationForm.value.email,
      //   phone: this.RegisterationForm.value.phone,
      //   city_id: this.RegisterationForm.value.city,
      //   address: this.RegisterationForm.value.address,
      //   password: this.RegisterationForm.value.password,
      //   password_confirmation: this.RegisterationForm.value.password,
      //   avatar:this.formData
      //  }
       this.formData.append('name',this.name?.value);
      this.formData.append('email',this.email?.value);
      this.formData.append('phone',this.phone?.value);
      this.formData.append('city_id',this.city?.value);
      this.formData.append('address',this.address?.value);
      this.formData.append('password',this.password?.value);
      this.formData.append('password_confirmation',this.confirmPassword?.value);
       // console.log(JSON.stringify(userModel));

      this.authService.register(this.formData).subscribe(
        data =>{
          console.log(data)
          let userToken = data.data.token;
          localStorage.setItem('userToken',userToken);
          this.router.navigate(['home']);
        },
        error =>{
          // this.router.navigate(['register',error.error['message']]);
          // this.toast.error(error.error.message);
          console.log(error.error.message);
        });
    }



}
