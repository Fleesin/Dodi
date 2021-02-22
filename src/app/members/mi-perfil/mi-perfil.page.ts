import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})

export class MiPerfilPage {

  user_info = {};

  constructor(public menuCtrl: MenuController, private router: Router) { 

    this.user_info = localStorage.getItem("user_data")

    console.log(this.user_info);
    
  } 
  
}
    

