import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus : boolean = false
  loginFormGroup:FormGroup

  errorMessage: number | string | null = 0
  constructor(private AuthService:AuthService,
              private fb:FormBuilder,
              private router:Router,
              private activatedRoute:ActivatedRoute
              ){

    this.loginFormGroup = this.fb.group({
      email: ['',[Validators.required,Validators.minLength(3)]],
      password:[''],
    })
  }
  ngOnInit(): void {
    // this.AuthService.isUserLoggedSubject().subscribe(status=>{
    //   this.loginStatus = status;
    //   console.log(this.loginStatus)
    //});

    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.errorMessage = (paramMap.get('error'))?this.activatedRoute.snapshot.paramMap.get('error'):0;
      })
  }

  login(){
    this.AuthService.login(this.loginFormGroup.value).subscribe(
      (data:any) =>{
        console.log(data)
       localStorage.setItem('sellerToken',data.data.token);
       this.AuthService.role=data.data.role[0]
      this.router.navigate(['home']);
   },
   error =>{
     // this.router.navigate(['login','Invalid Email or Password']);
    //  this.toast.error('Invalid Email or Password');
     console.log(error)
   });
  }

  logout(){
    this.AuthService.logout();
  }

}

