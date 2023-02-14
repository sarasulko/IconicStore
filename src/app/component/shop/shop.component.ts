import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

  export class ShopComponent{
    title = 'AngularComponent';
    
    constructor(public router: Router){}
    goToSingleProduct() {
    this.router.navigate(['/singleProduct'])

    }

}
