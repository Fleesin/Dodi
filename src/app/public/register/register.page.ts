import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


const TOKEN_KEY = 'auth-token';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  isAthenticated(): boolean{
    return this.authService.isAthenticated();
  }
  
}
