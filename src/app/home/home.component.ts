import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts: undefined | product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    });
  }

}
