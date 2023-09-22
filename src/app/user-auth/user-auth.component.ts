import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit{

  showLogin = false;
  authError = '';

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp = (data: signUp) => {
    this.user.userSignUp(data);
  }

  login = (data: login) => {

  }

  openLoginUser = () => {
    this.showLogin = true;
  }

  openSignUpUser = () => {
    this.showLogin = false;
  }
}
