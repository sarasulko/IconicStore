import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

{
    path: '',
    component: HomeComponent
  },

  {
    path: 'shop',
    component: ShopComponent
  },

{
    path: 'blog',
    component: BlogComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'singleProduct',
    component: SingleProductComponent
  },

{
    path: 'payment',
    component: PaymentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
