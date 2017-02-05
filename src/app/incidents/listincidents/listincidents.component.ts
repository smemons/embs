import { BreadcrumbService } from './../../services/breadcrumb.service';
import { IncidentService } from './../../services/incidentService';
import { Incident } from './../../models/incident';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listincidents',
  templateUrl: './listincidents.component.html',
  styleUrls: ['./listincidents.component.css']
})
export class ListincidentsComponent implements OnInit {

 incs:Incident[];
  constructor(private incService: IncidentService,private breadcrumbService:BreadcrumbService) { }

  ngOnInit() {
    this.getAllInc().subscribe({

      next: inc => {

        console.log("Got rooms: ", inc);
        this.incs=inc;
      }
    });;
  }
  getAllInc() {

    return this.incService.getAll();
  }
  incSelected(event){

  }
}
