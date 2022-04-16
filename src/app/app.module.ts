import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products-managment/products/products.component';
import { CreateProductComponent } from './components/products-managment/create-product/create-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestedOrdersComponent } from './components/orders-managment/requested-orders/requested-orders.component';
import { LatestComponent } from './components/orders-managment/latest/latest.component';
import { FulfilledComponent } from './components/orders-managment/fulfilled/fulfilled.component';
import { NotFulfilledComponent } from './components/orders-managment/not-fulfilled/not-fulfilled.component';
import { PickedOrdersComponent } from './components/orders-managment/picked-orders/picked-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    CreateProductComponent,
    ProfileComponent,
    RequestedOrdersComponent,
    LatestComponent,
    FulfilledComponent,
    NotFulfilledComponent,
    PickedOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }