import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../_auth/auth.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorLoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(private authService: AuthService) {
  }

  Login() {
    this.authService.vendorlogin(this.user, this.password)
  }

  ngOnInit() { this.authService.setMessage(""); }
}
