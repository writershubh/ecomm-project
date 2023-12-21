import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData: undefined | product;
  productMsg: undefined | string;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productId = this.activateRoute.snapshot.paramMap.get('id');
    productId && this.productService.getProduct(productId).subscribe((data) => {
      this.productData = data;
    });
  }

  submitupdateProduct = (data: product) => {
    if (this.productData){
      data.id = this.productData.id;
    }
    this.productService.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMsg = 'Product updated.'
      }
    });
    setTimeout(() => {
      this.productMsg = undefined
    }, 3000);
  }
}
