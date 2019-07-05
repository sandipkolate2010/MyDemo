import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['vendorname', 'firstname', 'lastname', 'email', 'address', 'contact', 'Action'];
  dataSource = new MatTableDataSource<User>([]);
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  users = Array<User>();

  constructor(
    private dataService: DataService,
    private router: Router) { }

    ngAfterViewInit() {
      this.dataService.getUsers().subscribe(data => {
        const tempusers: any = data;
        tempusers.forEach(element => {
          const user = new User();
          user._id = element._id;
          user.vendorname = element.vendorname;
          user.firstname = element.firstname;
          user.lastname = element.lastname;
          user.address = element.address;
          user.email = element.email;
          user.contact = element.contact;
          this.users.push(user);
        });
        this.dataSource = new MatTableDataSource<User>(this.users);
      });
      this.dataSource.paginator = this.paginator;
    }

  ngOnInit() {
  }

  onEdit(event: any) {
    this.router.navigate(['/addeditvendor/' + event.target.id]);
  }

  onAdd(event: any) {
    this.router.navigate(['/addeditvendor']);
  }

}
