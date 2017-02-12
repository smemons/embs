import { AuthService } from '../services/auth.service';
import { Incident } from './../models/incident';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

incident:Incident;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
   this.incident=this.authService.getCurrentIncident();

  }

}
