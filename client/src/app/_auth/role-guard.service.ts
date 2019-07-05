import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    if (token == null){
      this.router.navigate(['home']);
      return false;
    }
    const tokenPayload = decode(token);
    if (
      !this.authService.logIn ||  tokenPayload.role != expectedRole
    ) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}