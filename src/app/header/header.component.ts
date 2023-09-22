import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faCircleUser, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  menuType = 'default';
  sellerName = '';
  searchResult: undefined | product[];
  faCircleUser = faCircleUser;
  faCircle = faCircle;
  faApplePay = faApplePay;
  faGooglePay = faGooglePay;
  userName: string = '';

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
          // this.productService.getCartList(userData.id);
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  sellerLogout = () => {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  userLogout = () => {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  searchProduct = (query: KeyboardEvent) => {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.productService.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5;
        }
        this.searchResult = result;
      });
    }
  }

  hideSearch = () => {
    this.searchResult = undefined;
  }

  submitSearch = (val: string) => {
    this.route.navigate([`search/${val}`]);
  }

  redirectDetails = (id: number) => {
    this.route.navigate(['/details/' + id]);
  }
}

