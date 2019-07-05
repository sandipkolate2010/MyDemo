import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:5000';
  token;
  message = "";

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
  adminlogin(user: string, password: string) {
    this.http.post(this.uri + '/authenticate', { user: user, password: password, role: 'admin' })
      .subscribe((resp: any) => {
        this.router.navigate(['admin']);
        localStorage.setItem('token', resp.token);
        },
        (err) => { this.message = "Invalid user or password" }
      );

  }

  vendorlogin(user: string, password: string) {
    this.http.post(this.uri + '/authenticate', { user: user, password: password, role: 'vendor' })
      .subscribe((resp: any) => {
        this.router.navigate(['vendor']);
        localStorage.setItem('token', resp.token);
        },
        (err) => { this.message = "Invalid user or password" }
      );
  }

  public get getMessage(): string {
    return this.message;
  }

  public setMessage(msg: string) {
    this.message = msg;
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') != null);
  }

  public get adminLogIn(): boolean {
    if (this.logIn === true) {
      const token = localStorage.getItem('token');
      const tokenPayload = decode(token);
      if (tokenPayload.role === 'admin') {
        return true;
      }
    }
    return false;
  }

  public get vendorLogIn(): boolean {
    if (this.logIn === true) {
      const token = localStorage.getItem('token');
      const tokenPayload = decode(token);
      if (tokenPayload.role === 'vendor') {
        return true;
      }
    }
    return false;
  }

}


