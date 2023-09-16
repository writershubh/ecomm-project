import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faApple, faAndroid, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faHouse = faHouse;
  faPhone = faPhone;
  faApple = faApple;
  faAndroid = faAndroid;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {

  }
}
