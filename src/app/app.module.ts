import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderModule } from './component/header/header.module';
import { FooterModule } from './component/footer/footer.module';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    BlogComponent,
    AboutComponent,
    CartComponent,
    SingleProductComponent,
    RegisterUserComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
