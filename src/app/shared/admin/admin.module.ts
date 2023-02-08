import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingLnaguageComponent } from './components/programming-lnaguage/programming-lnaguage.component';
import { ProgrammingTecnologyComponent } from './components/programming-tecnology/programming-tecnology.component';
import { SocailPlatformComponent } from './components/socail-platform/socail-platform.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { EmployerComponent } from './components/employer/employer.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { OperatioClaimPipe } from 'src/app/pipe/operatio-claim.pipe';
import { JobSeekerPipe } from 'src/app/pipe/job-seeker.pipe';
import { ProgrammingLanguagePipe } from 'src/app/pipe/programming-language.pipe';
import { ProgrammingTechnologyPipe } from 'src/app/pipe/programming-technology.pipe';



@NgModule({
  declarations: [
    ProgrammingLnaguageComponent,
    ProgrammingTecnologyComponent,
    SocailPlatformComponent,
    LayoutComponent,
    UserProfilesComponent,
    EmployerComponent,
    JobSeekerComponent,
    OperationClaimComponent,
    UserOperationClaimComponent,
    OperatioClaimPipe,
    JobSeekerPipe,
    ProgrammingLanguagePipe,
    ProgrammingTechnologyPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdminModule { }
