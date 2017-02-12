import {
  RoomService
} from './../../services/room.service';
import {
  AlertService
} from '../../services/alert.service';
import {
  Room
} from './../../models/room';
import {
  BreadcrumbService
} from './../../services/breadcrumb.service';
import {
  IncidentService
} from './../../services/incidentService';
import {
  Incident
} from './../../models/incident';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-listincidents',
  templateUrl: './listincidents.component.html',
  styleUrls: ['./listincidents.component.css']
})
export class ListincidentsComponent implements OnInit {
  room: Room;
  incident: Incident;
  incs: Incident[];
  constructor(private incService: IncidentService,
    private breadcrumbService: BreadcrumbService,
    private alertService: AlertService, private roomService: RoomService,private incidentService:IncidentService) {}

  ngOnInit() {
    this.getAllInc().subscribe({

      next: inc => {

        console.log("Got rooms: ", inc);
        this.incs = inc;
      }
    });;
  }
  getAllInc() {

    return this.incService.getAll();
  }


  incSelected(incd: Incident) {

   this.incidentService.getIncidentByName(incd.title).subscribe({
      next: incdt => {
        console.log("Got incident: ", incdt);
       // sessionStorage.setItem('room', JSON.stringify(incdt));
        this.breadcrumbService.setBCMessage("incdt.areaName", incdt.roomName, incdt.title);
        this.alertService.success('Incident selected');
        sessionStorage.setItem('incident', JSON.stringify(incdt));

      }
    });
  }
}
