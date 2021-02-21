import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private authService: AuthenticationService, public menuCtrl: MenuController) {}

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
}
