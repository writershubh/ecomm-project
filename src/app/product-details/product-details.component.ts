import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faCircleExclamation, faStar, faCartShopping, faBoltLightning, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faApple, faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  faStar = faStar;
  faApple = faApple;
  faApplePay = faApplePay;
  faGooglePay = faGooglePay;
  faCircleExclamation = faCircleExclamation;
  faCartShopping = faCartShopping;
  faBoltLightning = faBoltLightning;
  faMinus = faMinus;
  faPlus = faPlus;

  productData: undefined | product;
  productQuantity: number = 1;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let productId = this.activateRoute.snapshot.paramMap.get('productId');
    productId && this.productService.getProduct(productId).subscribe((result) => {
      this.productData = result;
    });
  }

  handleQuantity = (val: string) => {
    if (this.productQuantity < 20 && val === 'plus'){
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }
}
