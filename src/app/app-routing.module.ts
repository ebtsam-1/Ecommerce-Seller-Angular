import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

const routes: Routes =  [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: HomeComponent },
      { path: 'orders/pending', component: HomeComponent },
      { path: 'orders/picked', component: HomeComponent },
      { path: 'payments/fulfilled', component: HomeComponent },
      { path: 'payments/unfulfilled', component: HomeComponent },

      // {
      //   path: 'user',
      //   loadChildren: () => import('src/app/modules/user/user.module').then(m => m.UserModule)
      // },
      //
      // { path: 'login/:error', component: LoginComponent },
      // { path: 'register', component: RegisterComponent },
      // { path: 'register/:error', component: RegisterComponent },
      // { path: 'product/:ID', component: ProductDetailsComponent },

    ]
  },
  { path: 'login', component: LoginComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
