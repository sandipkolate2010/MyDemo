import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  addAdminForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private dataService: DataService,
  ) {
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) {
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
      this.addAdminForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        user: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['admin'],
      });
  }

  get f() { return this.addAdminForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.addAdminForm.invalid) {
          return;
      }

      this.loading = true;
      this.dataService.saveAdmin(this.addAdminForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/adminlogin']);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }
}
