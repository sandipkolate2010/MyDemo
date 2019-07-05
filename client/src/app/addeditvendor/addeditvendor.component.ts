import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addeditvendor',
  templateUrl: './addeditvendor.component.html',
  styleUrls: ['./addeditvendor.component.css']
})
export class AddeditvendorComponent implements OnInit {
  addeditvendorForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  vendorId: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    // this.route.params.subscribe(params => {
    //   this.vendorId = params['id'] || 0;
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // });
  }

  ngOnInit() {
    this.addeditvendorForm = this.formBuilder.group({
      vendorname: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['vendor'],
    });

    this.vendorId = this.route.snapshot.paramMap.get('id');
    if (this.vendorId !== null) {
      this.dataService.getUser(this.vendorId).subscribe(data => {
        console.log('fdfdfdfdf'+ this.vendorId);
        console.log(data);
        this.addeditvendorForm = this.formBuilder.group({
          vendorname: [data[0].vendorname, Validators.required],
          firstname: [data[0].firstname, Validators.required],
          lastname: [data[0].lastname, Validators.required],
          address: [data[0].address, Validators.required],
          email: [data[0].email, Validators.required],
          contact: [data[0].contact, Validators.required],
          user: [data[0].user, Validators.required],
          password: [data[0].password, [Validators.required, Validators.minLength(6)]],
          role: ['vendor'],
        });
      });
    }
  }

  get f() { return this.addeditvendorForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.addeditvendorForm.invalid) {
      return;
    }

    this.loading = true;
    this.dataService.saveVendor(this.vendorId, this.addeditvendorForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/admin']);
        },
        error => {
          this.loading = false;
        });
  }
}
