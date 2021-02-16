import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  todo = {};
  constructor(private authService: AuthenticationService, public menuCtrl: MenuController, private router: Router) { }
  

  ngOnInit() {
  }

  login(){
    this.authService.login();
    this.router.navigate(['members', 'dashboard','tab1']);
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}
