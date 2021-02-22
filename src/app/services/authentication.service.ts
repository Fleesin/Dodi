import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { User } from "../Models/User";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import * as constants from './constanst/constants';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private plt: Platform, private http : HttpClient) { 
    this.plt.ready().then(()=> {
      this.checkToken;
    });
     

  }
  
 //http Headers
 headers = new HttpHeaders().set("Content-Type", "application/json");

 login(email:String, password:String){
    let body = JSON.stringify(
      {
        email: email,
        password: password
      }
    );
    return this.http.post<User>(constants.URL_API+constants.LOGIN_ENDPOINT, body, {
      headers: this.headers,
    });

  }

  register(name:String, lName:String, email:String, password:String,  direction:String, tId: String,id:String , phone:String,  pet: String){
    let body = JSON.stringify(
      {
        name: name,
        lName: lName,
        email: email,
        password: password,
        direction: direction,
        tId: tId,
        id: id,
        phone: phone,
        pet: pet
      }
    );
    return this.http.post<User>(constants.URL_API+constants.REGISTER_ENDPOINT, body, {
      headers: this.headers,
    });
  }

  getUser(name:String, lName:String, email:String,  direction:String, tId: String,id:String , phone:String, pet:String){
    let body = JSON.stringify(
      {
        name: name,
        lName: lName,
        email: email,
        direction: direction,
        tId: tId,
        id: id,
        phone: phone,
        pet: pet
      }
    );
    return this.http.get<User>(constants.URL_API+constants.GET_ENDPOINT);
  }
  
  logout(){
    return this.storage.remove(TOKEN_KEY).then(()=> {
      this.authenticationState.next(false);
    });
  }

  isAthenticated(){
    return this.authenticationState.value;
  }
  
  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res){
        this.authenticationState.next(true);
      } 
    });
  }
}
