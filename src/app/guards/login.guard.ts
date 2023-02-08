import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanActivateChild, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService :AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isAuthenticated){
      return true;
    }else{
      this.router.navigate(["Auth/Login"],{queryParams:{returnUrl:state.url}});
      //this.authService.redirectUrl = state.url;
      return false;
    }
  }
  
  canActiveChild(
    childRoute:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return true;
  }

  canDeactive(
    component:unknown,
    currentRoute:ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,
    nextState?:RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return true;
  }
  
  canLoad(
    route:Route,
    segments:UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return true;
    }

  
}
