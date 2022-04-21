import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Governate } from 'src/app/models/governate';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageURL = environment.images

  user: User = {} as User;

  EditUsrForm: FormGroup;
  governates: Governate[] = [];
  cities: City[] = [];
  governateID: number = 0;

  constructor(private authService: AuthService,
              private Router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {

    this.EditUsrForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      // file: ['', [Validators.required]],
      city: ['', [Validators.required]],
      governate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {

    this.authService.governates().subscribe(res => {
      console.log(res);
      this.governates = res;
      console.log(this.governateID);
    })

    this.authService.myProfile().subscribe(ele => {
      this.user = ele.data;
      this.EditUsrForm.setValue({
        name: ele.data.name,
        email: ele.data.email,
        phone: ele.data.phone,
        city: ele.data.city.id,
        governate: ele.data.city.governorate_id,
        address:ele.data.address,
       });


      console.log(this.EditUsrForm.value)
    }, err => {
      console.log(err);
      this.Router.navigate(['/login', 'You Should Login'])

    })
  }


  onChange(event: any) {

    //  this.governateID = event.target.value
    console.log(this.governateID);

    this.authService.cities(+this.governateID).subscribe(res => {
      console.log(res);
      this.cities = res;
      // console.log(this.cities)
    })

  }

  // Errors Handling---------------

  get name() {
    return this.EditUsrForm.get('name');
  }

  get email() {
    return this.EditUsrForm.get('email');
  }

  get phone() {
    return this.EditUsrForm.get('phone');
  }

  get city() {
    return this.EditUsrForm.get('city');
  }

  get address() {
    return this.EditUsrForm.get('address');
  }


  //  update Function

  updateUser() {

    let userModel = {
      name: this.EditUsrForm.value.name,
      email: this.EditUsrForm.value.email,
      phone: this.EditUsrForm.value.phone,
      city_id: this.EditUsrForm.value.city,
      address: this.EditUsrForm.value.address,
      // password: this.EditUsrForm.value.password,
      // password_confirmation: this.EditUsrForm.value.password,
    }

    console.log(JSON.stringify(userModel));

    this.authService.editProfile(userModel).subscribe(
      data => {
        console.log(data)
        // this.Router.navigate(['user/profile']);
      },
      error => {
        // this.Router.navigate(['user/edit',error.error['message']]);
        console.log(error.error);
      });
  }


}
