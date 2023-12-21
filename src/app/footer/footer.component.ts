import { Component } from '@angular/core';
import { faFacebook, faThreads, faInstagram, faLinkedin, faGithub, faApple, faAndroid, faYoutube, faWhatsapp, faFacebookMessenger, faTelegram, faXTwitter, faSnapchat, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse, faPhone, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faFacebook = faFacebook;
  faXTwitter = faXTwitter;
  faThreads = faThreads;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faHouse = faHouse;
  faPhone = faPhone;
  faApple = faApple;
  faAndroid = faAndroid;
  faYoutube = faYoutube;
  faWhatsapp = faWhatsapp;
  faFacebookMessenger = faFacebookMessenger;
  faTelegram = faTelegram;
  faSnapchat = faSnapchat;
  faDiscord = faDiscord;
  faHeart = faHeart;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
}
