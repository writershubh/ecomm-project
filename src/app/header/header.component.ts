import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType = 'default';
  sellerName = '';
  searchResult: undefined | product[];
  faCircleUser = faCircleUser;

  constructor(private route: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore: any = localStorage.getItem('seller');
            let sellerData: any = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  logout = () => {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

  searchProduct = (query: KeyboardEvent) => {
    if (query){
      const element = query.target as HTMLInputElement;
      this.productService.searchProducts(element.value).subscribe((result) => {
        if (result.length > 5){
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
    this.route.navigate(['/details/'+id]);
  }
}
