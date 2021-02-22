import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient }  from '@angular/common/http'
import { User } from 'src/app/Models/User';
import { noop } from 'rxjs';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})

export class MiPerfilPage {
    todo:{
      name: "",
      lName: "",
      email:"",
      direction: "",
      tId: "",
      id:"",
      phone: "",
      pet:"",
    };

  public  nombre = "";
  public  apellido ="";
  public  email = "";
  public  direccion ="";
  public  tip_id = "";
  public  id = "";
  public  ceular ="";
  public  pet = "";

  constructor(private http: HttpClient, private authService: AuthenticationService, public menuCtrl: MenuController, private router: Router) { 
    this.todo = {
      name: "",
      lName: "",
      email:"",
      direction: "",
      tId: "",
      id:"",
      phone: "",
      pet:"",
    };
  }
  error="";
  getUser(){
    console.log(this.todo);
    if(this.todo.name!=""  && this.todo.lName!="" && this.todo.email!=""  && this.todo.direction!=""  && this.todo.tId!="" && this.todo.id!="" && this.todo.phone!="" && this.todo.pet!=""){

    this.authService.getUser(this.todo.name, this.todo.lName, this.todo.email, this.todo.direction, this.todo.tId, this.todo.id, this.todo.phone, this.todo.pet).subscribe(
      res => {
        console.log("todo ok", res);
        
          this.nombre = this.todo.name;
          this.apellido = this.todo.lName;
          this.email = this.todo.email;
          this.direccion = this.todo.direction;
          this.tip_id = this.todo.tId;
          this.id = this.todo.id;
          this.ceular = this.todo.phone;
          this.pet = this.todo.pet
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
