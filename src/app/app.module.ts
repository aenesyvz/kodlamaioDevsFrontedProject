import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './shared/admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from './shared/auth/auth.module';
import { OperatioClaimPipe } from './pipe/operatio-claim.pipe';
import { JobSeekerPipe } from './pipe/job-seeker.pipe';
import { ProgrammingLanguagePipe } from './pipe/programming-language.pipe';
import { ProgrammingTechnologyPipe } from './pipe/programming-technology.pipe';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // OperatioClaimPipe,
    // JobSeekerPipe,
    // ProgrammingLanguagePipe,
    // ProgrammingTechnologyPipe,
    // AuthComponent,
    // LoginComponent,
    // UserRegisterComponent,
    // AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'http://localhost:5151/api/' },
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
