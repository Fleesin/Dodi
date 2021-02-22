import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})

export class MiPerfilPage {
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

  constructor(public menuCtrl: MenuController, private router: Router) { 

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
    console.log(this.info_user);
    console.log(this.user_info);
    
  } 
  
}
    

