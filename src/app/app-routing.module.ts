import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import {FulfilledComponent} from "./components/orders-managment/fulfilled/fulfilled.component";
import {NotFulfilledComponent} from "./components/orders-managment/not-fulfilled/not-fulfilled.component";
import {PickedOrdersComponent} from "./components/orders-managment/picked-orders/picked-orders.component";
import {RequestedOrdersComponent} from "./components/orders-managment/requested-orders/requested-orders.component";
import { CreateProductComponent } from './components/products-managment/create-product/create-product.component';
import { ProductsComponent } from './components/products-managment/products/products.component';

const routes: Routes =  [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      
      { path: 'orders', component: HomeComponent },
      { path: 'orders/pending', component: RequestedOrdersComponent },
      { path: 'orders/picked', component: PickedOrdersComponent },
      
      { path: 'payments/fulfilled', component: FulfilledComponent },
      { path: 'payments/unfulfilled', component: NotFulfilledComponent },
      
      { path: 'products', component: ProductsComponent },
      { path: 'products/create', component: CreateProductComponent },


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
