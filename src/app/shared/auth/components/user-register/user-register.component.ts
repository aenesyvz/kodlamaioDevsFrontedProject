import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm:FormGroup;

  email:string;
  password:string;
  firstName:string;
  lastName:string;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.createUserRegisterForm();
  }

  createUserRegisterForm(){
    this.userRegisterForm = new FormGroup({
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
    });
  }

  userRegister(){
    if(this.userRegisterForm.valid){
      let userRegisterModel = Object.assign({},this.userRegisterForm.value);
      this.authService.register(userRegisterModel).subscribe((res) => {
        localStorage.setItem("token",res.token);
      });
    }
  }
}
