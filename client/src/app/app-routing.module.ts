import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorLoginComponent } from './vendorlogin/vendorlogin.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RoleGuardService } from './_auth/role-guard.service';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { AddeditvendorComponent } from './addeditvendor/addeditvendor.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { VendorComponent } from './vendor/vendor.component';
import { GuardService } from './_auth/guard.service';
import { AddadminComponent } from './addadmin/addadmin.component';

const routes: Routes = [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },

      { path: 'placeorder', component: PlaceorderComponent },

      { path: 'vendorlogin', component: VendorLoginComponent,canActivate: [GuardService], data: {expectedRole: 'vendor'} },
      { path: 'vendor', component: VendorComponent,canActivate: [RoleGuardService], data: {expectedRole: 'vendor'} },

      { path: 'adminlogin', component: AdminLoginComponent, canActivate: [GuardService], data: {expectedRole: 'admin'} },
      { path: 'addadmin', component: AddadminComponent, canActivate: [GuardService], data: {expectedRole: 'admin'} },
      { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'} },
      { path: 'addeditvendor', component: AddeditvendorComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'} },
      { path: 'addeditvendor/:id', component: AddeditvendorComponent, canActivate: [RoleGuardService], data: {expectedRole: 'admin'} }
];

// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}

