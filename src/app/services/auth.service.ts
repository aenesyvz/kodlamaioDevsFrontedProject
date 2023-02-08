import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessTokenModel } from '../models/dtos/accessTokenModel';
import { LoginDto } from '../models/dtos/loginDto';
import { RegisterDto } from '../models/dtos/registerDto';
import { ForgotPassword } from '../models/entity/forgotPassword';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  userId:number;
  redirectUrl:string;

  register(registerDto:RegisterDto):Observable<AccessTokenModel>{
    let api = this.apiUrl + "Authentication/Register";
    return this.httpClient.post<AccessTokenModel>(api,registerDto);
  }

  login(loginDto:LoginDto):Observable<AccessTokenModel>{
    let api = this.apiUrl + "Authentication/Login";
    return this.httpClient.post<AccessTokenModel>(api,loginDto);
  }

  forgotPassword(forgotPassword:ForgotPassword):Observable<boolean>{
    let api = this.apiUrl + "Authentication/ForgotPassword";
    return this.httpClient.post<boolean>(api,forgotPassword);
  }
  
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}
