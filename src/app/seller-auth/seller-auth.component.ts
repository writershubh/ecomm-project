import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {

  showLogin = false;
  authError = '';

  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp = (data: signUp) => {
    this.sellerService.userSignUp(data);
  }

  login = (data: login) => {
    this.authError = '';
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Invalid Credentials';
      }
    })
  }

  openLogin = () => {
    this.showLogin = true;
  }

  openSignUp = () => {
    this.showLogin = false;
  }
}
