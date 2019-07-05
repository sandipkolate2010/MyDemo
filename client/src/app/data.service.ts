import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (localStorage.getItem('token') ? localStorage.getItem('token') : '')
    })
  };

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  getUsers() {
    return this.http.get(this.uri + '/users/vendors', this.httpOptions);
  }

  getUser(id: any) {
    return this.http.get(this.uri + '/users/vendors/' + id , this.httpOptions);
  }

  saveVendor(vendorId: any, user: User) {
    if (vendorId != null){
      alert(vendorId);
      return this.http.put(this.uri + '/users/save/' + vendorId , user, this.httpOptions);
    } else {
      return this.http.post(this.uri + '/users/save', user, this.httpOptions);
    }
  }

  saveAdmin(user: User) {
    return this.http.post(this.uri + '/users/register', user);
  }
}
