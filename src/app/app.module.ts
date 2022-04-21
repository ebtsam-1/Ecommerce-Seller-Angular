import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { FulfilledComponent } from './components/orders-managment/fulfilled/fulfilled.component';
import { NotFulfilledComponent } from './components/orders-managment/not-fulfilled/not-fulfilled.component';
import { PickedOrdersComponent } from './components/orders-managment/picked-orders/picked-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProductComponent } from './components/products-managment/edit-product/edit-product.component';
import { AllOrdersComponent } from './components/orders-managment/all-orders/all-orders.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FilesModule } from './shared/files/files.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';
import { AvailableComponent } from './components/products-managment/available/available.component';
import { UnavailableComponent } from './components/products-managment/unavailable/unavailable.component';
import { ZeroStockComponent } from './components/products-managment/zero-stock/zero-stock.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    FulfilledComponent,
    NotFulfilledComponent,
    PickedOrdersComponent,
    EditProductComponent,
    AllOrdersComponent,
    LoaderComponent,
    SignupComponent,
    AvailableComponent,
    UnavailableComponent,
    ZeroStockComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FilesModule,
    NgxDatatableModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
