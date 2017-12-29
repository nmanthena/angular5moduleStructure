import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Http } from "@angular/http";

@Injectable()
export class AuthenticationService extends ApiService {
 
  constructor(http:Http) {
    super(http);
  }
  login(body){
    return this.post('api/user/login',body);
  }
  
  logout(){
    return this.get('api/user/logout');
  }

  public getToken(){
    return this.post('api/user/getSession', {"authToken": localStorage.getItem('isUser')});
  }

}
