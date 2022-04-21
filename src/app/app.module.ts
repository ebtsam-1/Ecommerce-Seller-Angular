//Core Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilesModule} from './shared/files/files.module';
//External Modules
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

//==============Components ====================
import {AppComponent} from './app.component';
//layout components
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';
import {HomeComponent} from './components/home/home.component';
//Auth Components
import {ProfileComponent} from './components/profile/profile.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {EditProductComponent} from './components/products-managment/edit-product/edit-product.component';
import {LoginComponent} from './components/auth/login/login.component';
//Products Components
import {ProductsComponent} from './components/products-managment/products/products.component';
import {CreateProductComponent} from './components/products-managment/create-product/create-product.component';
import {AvailableComponent} from './components/products-managment/available/available.component';
import {UnavailableComponent} from './components/products-managment/unavailable/unavailable.component';
import {ZeroStockComponent} from './components/products-managment/zero-stock/zero-stock.component';
//Orders Components
import {RequestedOrdersComponent} from './components/orders-managment/requested-orders/requested-orders.component';
import {PickedOrdersComponent} from './components/orders-managment/picked-orders/picked-orders.component';
import {AllOrdersComponent} from './components/orders-managment/all-orders/all-orders.component';
//Payments Components
import {FulfilledComponent} from './components/orders-managment/fulfilled/fulfilled.component';
import {NotFulfilledComponent} from './components/orders-managment/not-fulfilled/not-fulfilled.component';
//Global Loader
import {LoaderComponent} from './components/loader/loader.component';

//==============Interceptors ====================
import {TokenInterceptorService} from './interceptors/token-interceptor.service';
import {LoaderInterceptorService} from './interceptors/loader-interceptor.service';
import {ErrorInterceptorService} from './interceptors/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    LoaderComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    AvailableComponent,
    UnavailableComponent,
    ZeroStockComponent,
    RequestedOrdersComponent,
    AllOrdersComponent,
    PickedOrdersComponent,
    FulfilledComponent,
    NotFulfilledComponent,

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
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
