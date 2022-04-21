import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';
import {FulfilledComponent} from "./components/orders-managment/fulfilled/fulfilled.component";
import {NotFulfilledComponent} from "./components/orders-managment/not-fulfilled/not-fulfilled.component";
import {PickedOrdersComponent} from "./components/orders-managment/picked-orders/picked-orders.component";
import {RequestedOrdersComponent} from "./components/orders-managment/requested-orders/requested-orders.component";
import {CreateProductComponent} from './components/products-managment/create-product/create-product.component';
import {EditProductComponent } from './components/products-managment/edit-product/edit-product.component';
import {ProductsComponent} from './components/products-managment/products/products.component';
import {AllOrdersComponent} from "./components/orders-managment/all-orders/all-orders.component";
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},

      {path: 'orders', component: AllOrdersComponent,canActivate:[AuthGuard]},
      {path: 'orders/requests', component: RequestedOrdersComponent},
      {path: 'orders/picked', component: PickedOrdersComponent},

      {path: 'payments/fulfilled', component: FulfilledComponent},
      {path: 'payments/unfulfilled', component: NotFulfilledComponent},

      {path: 'products', component: ProductsComponent},
      {path: 'product/:message', component: ProductsComponent},
      {path: 'products/create', component: CreateProductComponent},
      {path: 'products/edit/:id', component: EditProductComponent },
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
