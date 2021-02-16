import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, public menuCtrl: MenuController) { }
  

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}
