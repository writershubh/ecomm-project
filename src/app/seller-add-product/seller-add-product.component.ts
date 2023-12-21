import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent  {

  addProductMsg: string | undefined;

  constructor(private product: ProductService) { } 

  submitaddProduct = (data: product) => {
    this.product.addProduct(data).subscribe((result) => {
      if(result){
        this.addProductMsg = 'Product added successfully.'
      }
      setTimeout(() => this.addProductMsg = undefined, 3000);
    });
  }
}
