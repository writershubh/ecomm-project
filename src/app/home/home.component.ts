import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts: undefined | product[];
  faCartShopping = faCartShopping;
  faCircleInfo = faCircleInfo;
  trendyProducts: undefined | product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    });
    this.productService.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    });
  }
}
