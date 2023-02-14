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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    BlogComponent,
    AboutComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    NgbModule,
    RatingModule,
    FormsModule,
    HttpClientModule

  
  ],
  providers: [ RatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
