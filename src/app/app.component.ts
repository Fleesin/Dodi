import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { Platform } from '@ionic/angular';

import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
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

  initializeApp(){
    this.platform.ready().then(()=>{
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state =>{
        console.log('Auth changed', state);
        if (state) {
          this.router.navigate(['members', 'dashboard'])
        } else{
          this.router.navigate(['login']);
        }

      });
    });
  
  }
}
