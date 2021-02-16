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
  constructor(
    private statusBar: StatusBar,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private authService: AuthenticationService,
    private router:Router

  ) {
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
