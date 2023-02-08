import { Component, OnInit } from '@angular/core';
import { PageRequest } from 'src/app/models/dtos/pageRequest';
import { UserProfile } from 'src/app/models/entity/userProfile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css']
})
export class JobSeekerComponent implements OnInit {

  userProfile:UserProfile;
  userProfiles:UserProfile[];

  pageRequest : PageRequest = {page:0,pageSize:25};

  constructor(
    private userProfileService:UserProfileService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  changeStatus(id:number){
    this.userProfileService.getById(id).subscribe((res) => {
      this.userProfile = res;
      this.userProfile.status = !this.userProfile.status;
    });

    this.userProfileService.update(this.userProfile).subscribe((res) => {
      this.getList();
    });
  }

  delete(id:number){
    this.userProfileService.delete(id).subscribe((res) => {
      this.getList();
    });
  }
  getList(){
    this.userProfileService.getList(this.pageRequest).subscribe((res) => {
      this.userProfiles = res.items;
    });
  }
}
