import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot}  from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate {
  
  constructor(public authService: AuthService, public router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (token != null){
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}