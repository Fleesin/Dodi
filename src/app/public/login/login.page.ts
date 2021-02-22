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

  todo = {
    email:"",
    password:""
  };

  error="";
  constructor(private authService: AuthenticationService, public menuCtrl: MenuController, private router: Router) { 

    this.todo = {
      email:"",
      password:""
    };
  }
  

  ngOnInit() {

  }

  login(){
    console.log(this.todo);
    if(this.todo.email!="" && this.todo.password!=""){
    this.authService.login(this.todo.email, this.todo.password).subscribe(
      res => {
        console.log("todo ok", res);
        localStorage.setItem("user_data", JSON.stringify(res));
        this.authService.authenticationState.next(true);
        this.router.navigate(['members', 'dashboard','tab1']);
      },
      err => {
        console.log('HTTP Error')
        this.error = err.error.error;
      },
    )
  }

  }
  resetForm(){
    this.error="";
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}
