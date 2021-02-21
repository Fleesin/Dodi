import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const TOKEN_KEY = 'auth-token';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  todo = {
    name: "",
    lName: "",
    email:"",
    password:"",
    direction: "",
    tId: "",
    id:"",
    phone: "",
    pet:"",
  };

  constructor(private authService: AuthenticationService, private router: Router) {

    this.todo = {
      name: "",
      lName: "",
      email: "",
      password: "",
      direction: "",
      tId:"",
      id: "",
      phone: "",
      pet: "",
    };
   }
   error="";
  ngOnInit() {
  }

  
  register(){
    console.log(this.todo);
    if(this.todo.name!=""  && this.todo.lName!="" && this.todo.email!="" && this.todo.password!="" && this.todo.direction!=""  && this.todo.tId!="" && this.todo.id!="" && this.todo.phone!="" && this.todo.pet!=""){
    this.authService.register(this.todo.name, this.todo.lName, this.todo.email, this.todo.password, this.todo.direction, this.todo.tId, this.todo.id, this.todo.phone, this.todo.pet).subscribe(
      res => {
        console.log("todo ok", res);
        this.authService.authenticationState.next(true);
        this.router.navigate(['login']);
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
  
}
