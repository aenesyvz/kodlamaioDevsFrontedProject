import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

 

  
  constructor() { }

  ngOnInit(): void {
  }
//  refresh() {
//     this.isAuthenticated = this.authService.isAuthenticated();
//     if (this.isAuthenticated) {
//       let token = localStorage.getItem("token");
//       let decode = this.jwtHelper.decodeToken(token);
      
//       console.log(JSON.stringify(decode));
      
//       let userId = Object.keys(decode).filter(x => x.endsWith("/nameidentifier"))[0];
//       this.userId = decode[userId];
//     }
//   }

}
