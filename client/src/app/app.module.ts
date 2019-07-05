import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';

import { AppRoutingModule } from '../app/app-routing.module';

import { AppComponent } from './app.component';
import { VendorLoginComponent } from './vendorlogin/vendorlogin.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { JwtHelperService , JWT_OPTIONS } from '@auth0/angular-jwt';
import { RoleGuardService } from './_auth/role-guard.service';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { GuardService } from './_auth/guard.service';
import { DataService } from './data.service';
import { VendorComponent } from './vendor/vendor.component';

import {
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddeditvendorComponent } from './addeditvendor/addeditvendor.component';
import { AddadminComponent } from './addadmin/addadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceorderComponent,
    VendorLoginComponent,
    VendorComponent,
    AdminLoginComponent,
    AdminComponent,
    AddeditvendorComponent,
    AddadminComponent,
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  exports: [
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [DataService, GuardService, RoleGuardService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
