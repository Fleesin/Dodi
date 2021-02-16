import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.page.html',
  styleUrls: ['./mis-pedidos.page.scss'],
})
export class MisPedidosPage implements OnInit {

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
