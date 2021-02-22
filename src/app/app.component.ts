import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { IonicRouteStrategy, Platform } from '@ionic/angular';

import { AuthenticationService } from './services/authentication.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  providers:[{provide:RouteReuseStrategy, useClass: IonicRouteStrategy}, StatusBar, SplashScreen],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_info = {
    name: "",
    lName: "",
    email:"",
    direction: "",
    tId: "",
    id:"",
    phone: "",
    pet:"",
  };
  info_user: any ={};
  constructor(
    private statusBar: StatusBar,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private authService: AuthenticationService,
    private router:Router

  ) {


    this.info_user = JSON.parse(localStorage.getItem("user_data"))
    this.user_info = {
      name: this.info_user.name,
      lName: this.info_user.lName,
      email: this.info_user.email,
      direction: this.info_user.direction,
      tId:this.info_user.tId,
      id: this.info_user.id,
      phone: this.info_user.phone,
      pet: this.info_user.pet,

    };
    this.initializeApp();
  }
  logout(){
    this.authService.logout();
  }
  initializeApp(){
    this.platform.ready().then(()=>{

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state =>{
        console.log('Auth changed', state);
        if (state) {
          this.router.navigate(['members', 'dashboard','tab1'])
        } else{
          this.router.navigate(['login']);
        }

      });
    });
  
  }
}
