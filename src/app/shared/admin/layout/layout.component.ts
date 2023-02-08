import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfile } from 'src/app/models/entity/userProfile';
import { UserProfileService } from 'src/app/services/user-profile.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private userProfileService:UserProfileService,
    private authService:AuthService,
  ) { }

  userId:number;
  userProfile?:UserProfile;
  ngOnInit(): void {
   //this.refresh();
  }

  refresh() {
    this.userProfileService.getById(this.authService.userId).subscribe((res) => {
      this.userProfile = res;
      console.log("adminlayout"+this.authService.userId);
      
      console.log(this.userProfile.firstName);
      
    });
  }
}
