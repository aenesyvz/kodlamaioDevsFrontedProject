import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginDto } from 'src/app/models/dtos/loginDto';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginDto:LoginDto;

  email:string;
  password:string;

  jwtHelper:JwtHelperService = new JwtHelperService;
  isAuthenticated:boolean;
  userId:number;
  operationClaims:String[] = [];
  
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    });
  } 

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value);
      this.loginDto = {
        "userForLoginDto":{
          email : loginModel.email,
          password : loginModel.password
        }
      }
      this.authService.login(this.loginDto).subscribe((res) => {
        localStorage.setItem("token",res.token);
        this.refresh();
        this.navigate();
      });
    }
  }

  refresh(){
    this.isAuthenticated = this.authService.isAuthenticated();
    if(this.isAuthenticated){
      let token = localStorage.getItem("token");
      let decode = this.jwtHelper.decodeToken(token);
      console.log(decode);
      
      let userId = Object.keys(decode).filter(x => x.endsWith("/nameidentifier"))[0];
      this.userId = decode[userId];
      this.authService.userId = this.userId;
      
      let operationClaims = Object.keys(decode).filter(x => x.endsWith("/role"))[0];
      this.operationClaims = [...decode[operationClaims]];
      
    }
  }

  navigate(){
    if(this.operationClaims.filter(e => e === "Admin")){
      this.router.navigate(["Admin/ProgrammingLanguage"]);
    }else if(this.operationClaims.filter(e => e === "Employer")){
      
    }else if(this.operationClaims.filter(e => e === "Moderator")){
      
    }else{
       
       
    }
  }
 
}
