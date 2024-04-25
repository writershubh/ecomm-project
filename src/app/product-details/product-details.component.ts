import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product } from '../data-type';
import { faCircleExclamation, faStar, faCartShopping, faBoltLightning, faMinus, faPlus, faMultiply } from '@fortawesome/free-solid-svg-icons';
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
  faRemove = faMultiply;

  productData: undefined | product;
  productQuantity = 1;
  removeCart = false;
  cartData: product | undefined;
  trendyProducts: undefined | product[];

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productId = this.activateRoute.snapshot.paramMap.get('productId');
    productId && this.productService.getProduct(productId).subscribe((result) => {
      this.productData = result;
      const cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: product) => productId == item.id.toString());
        if (items.length) {
          this.removeCart = true;
        } else {
          this.removeCart = false;
        }
      }
      const user = localStorage.getItem('user');
      if (user) {
        const userId = user && JSON.parse(user).id;
        this.productService.getCartList(userId);
        this.productService.cartData.subscribe((result) => {
          const item = result.filter((item: product) => productId?.toString() === item.productId?.toString());
          if (item.length) {
            this.cartData = item[0];
            this.removeCart = true;
          }
        })
      }
    });
    this.productService.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }

  handleQuantity = (val: string) => {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart = () => {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.productData);
        this.removeCart = true;
      } else {
        const user = localStorage.getItem('user');
        const userId = user && JSON.parse(user).id;
        const cartData: cart = {
          ...this.productData, userId, productId: this.productData.id
        }
        delete cartData.id;
        this.productService.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.productService.getCartList(userId);
            this.removeCart = true;
          }
        })
      }
    }
  }

  removeFromCart = (productId: number) => {
    if (!localStorage.getItem('user')) {
      this.productService.removeItemFromCart(productId);
    } else {
      const user = localStorage.getItem('user');
      const userId = user && JSON.parse(user).id;
      this.cartData && this.productService.removeToCart(this.cartData.id).subscribe((result) => {
        if (result) {
          this.productService.getCartList(userId);
        }
      })
    }
    this.removeCart = false
  }
}