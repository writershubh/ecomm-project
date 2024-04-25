import { Component, OnInit } from '@angular/core';
import { cart, login, product, signUp } from '../data-type';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin = false;
  authError = '';

  constructor(private user: UserService, private productService: ProductService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp = (data: signUp) => {
    this.user.userSignUp(data);
  }

  login = (data: login) => {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) => {
      if (result) {
        this.authError = 'Invalid Credentials';
      } else {
        this.localCartToRemoteCart();
      }
    });
  }

  openLoginUser = () => {
    this.showLogin = true;
  }

  openSignUpUser = () => {
    this.showLogin = false;
  }

  localCartToRemoteCart = () => {
    const data = localStorage.getItem('localCart');
    const user = localStorage.getItem('user');
    const userId = user && JSON.parse(user).id;
    if (data) {
      const cartDataList: product[] = JSON.parse(data);
      cartDataList.forEach((product: product, index) => {
        const cartData: cart = {
          ...product, productId: product.id, userId
        }
        delete cartData.id;
        setTimeout(() => {
          this.productService.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn('item stored in DB');
            }
          })
        }, 500);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart');
        }
      })
    }
    setTimeout(() => {
      this.productService.getCartList(userId)
    }, 2000);
  }
}
