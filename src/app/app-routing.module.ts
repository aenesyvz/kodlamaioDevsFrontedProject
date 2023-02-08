import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/admin/layout/layout.component';
import { ProgrammingLnaguageComponent } from './shared/admin/components/programming-lnaguage/programming-lnaguage.component';
import { ProgrammingTecnologyComponent } from './shared/admin/components/programming-tecnology/programming-tecnology.component';
import { SocailPlatformComponent } from './shared/admin/components/socail-platform/socail-platform.component';
import { AuthLayoutComponent } from './shared/auth/auth-layout/auth-layout.component';
import { LoginComponent } from './shared/auth/components/login/login.component';
import { UserRegisterComponent } from './shared/auth/components/user-register/user-register.component';
import { OperationClaimComponent } from './shared/admin/components/operation-claim/operation-claim.component';
import { UserOperationClaimComponent } from './shared/admin/components/user-operation-claim/user-operation-claim.component';
import { UserProfilesComponent } from './shared/admin/components/user-profiles/user-profiles.component';
import { JobSeekerLayoutComponent } from './shared/job-seeker/job-seeker-layout/job-seeker-layout.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path:"Auth",
    component:AuthLayoutComponent,
    children:[
      {path:"Login",component:LoginComponent},
      {path:"UserRegister",component:UserRegisterComponent}
    ]
  },

  {
    path:"Admin",
    component:LayoutComponent,
    children:[
      {path:"ProgrammingLanguage",component:ProgrammingLnaguageComponent,canActivate:[LoginGuard]},
      {path:"ProgrammingTechnology/ProgrammingLanguage/:programmingLanguageId",component:ProgrammingTecnologyComponent,canActivate:[LoginGuard]},
      {path:"SocialPlatform",component:SocailPlatformComponent,canActivate:[LoginGuard]},
      {path:"OperationClaim",component:OperationClaimComponent,/*canActivate:[LoginGuard]*/},
      {path:"UserOperationClaim/:userId",component:UserOperationClaimComponent,canActivate:[LoginGuard]},
      {path:"UserProfiles",component:UserProfilesComponent,canActivate:[LoginGuard]}
    ]
  },

  {
    path:"JobSeeker",
    component:JobSeekerLayoutComponent,
    children:[
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
