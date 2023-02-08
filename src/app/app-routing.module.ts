import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
