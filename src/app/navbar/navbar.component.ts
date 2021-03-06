import { Router } from '@angular/router';
import { BreadcrumbService } from './../services/breadcrumb.service';
import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private authService: AuthService) {

  }

  ngOnInit() {

  }
  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedin;
  }
  logout(event) {
    this.authService.logout();
  }

}
