import { IncidentService } from './../../services/incidentService';
import { Room } from './../../models/room';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { RoomService } from './../../services/room.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createInc',
  templateUrl: './createInc.component.html',
  styleUrls: ['./createInc.component.css']
})
export class CreateIncComponent implements OnInit {
model: any = {};
loading = false;
rooms:Room[];
   constructor(
        private router: Router,
       private roomService: RoomService,
       private incidentService:IncidentService,
       private alertService: AlertService
     ) {


      }

  ngOnInit()
  {
    this.getAllRooms().subscribe({

      next: rooms => {

        console.log("Got rooms: ", rooms);
        this.rooms=rooms;
      }
    });;
  }
  getAllRooms() {

    return this.roomService.getAll();
  }


  /**
   *
   * create new incident
   *
   *  CreateIncident
   */
  createIncident(){

    console.log(this.model);
        this.loading = true;
         this.incidentService.create(this.model)
            .subscribe(
                data => {
                   console.log('User created - Service!');
                   this.alertService.success('Room created!');
                    this.router.navigate(['/home']);
                },
                error => {
                    //this.alertService.error(error);
                    console.log(error);
                    this.alertService.error(error._body);
                    this.loading = false;
                });

  }

}
