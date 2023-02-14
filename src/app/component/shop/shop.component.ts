import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductModel } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  ratingcount = 0;
totalrating = 0;
avarageRating : any ;
ratingcontrol = new FormControl(0);
// declaration of model
productList!: ProductModel[];
productLists: ProductModel[]=[];
constructor(private service : ProductsService){}

ngOnInit(){

  // this.service.getProducts().subscribe({
  //   next: (res: any) => {
  //     console.log(res);
  //     res.default.forEach((productList: ProductModel) => {
  //       this.productList?.push({
  //         id: productList.id,
  //         image: productList.image,
  //         name: productList.name,
  //         rating: productList.rating,
  //         price: productList.price,
          
  //       } as ProductModel);
  //   }
  //  ) }
  // })
  this.getProducts()
}

getRating(){
  this.ratingcount++;
  this.totalrating+=this.ratingcontrol?.value || 0;
  console.log(this.ratingcontrol.value);
  this.avarageRating = (this.totalrating / this.ratingcount).toFixed(2);
}
//  
// getProducts(){
//   this.service.displayAllProducts().subscribe(
//     showProduct =>{ this.productLists = showProduct}

//   )
// }

getProducts(){
  this.service.displayAllProducts().subscribe({
    next : (resp: ProductModel[]) =>{
      this.productLists = resp
    },
    error: (_err)=>{
      console.log(_err)
    }
  })

}

}


