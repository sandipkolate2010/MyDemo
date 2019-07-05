import { Component } from '@angular/core';
import { AuthService } from './_auth/auth.service';
import { RoleGuardService } from './_auth/role-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
  constructor(private authService: AuthService, roleGuardService: RoleGuardService) {
  }
}

