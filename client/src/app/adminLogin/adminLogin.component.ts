import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../_auth/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {
  user = '';
  password = '';
  constructor(private authService: AuthService) {

  }
  Login() {
  this.authService.adminlogin(this.user, this.password)
  }

  ngOnInit() {
    this.authService.setMessage("");

  }
}
