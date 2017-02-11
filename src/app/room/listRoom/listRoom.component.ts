import { AlertService } from './../../services/alert.service';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listRoom',
  templateUrl: './listRoom.component.html',
  styleUrls: ['./listRoom.component.css']
})
export class ListRoomComponent implements OnInit {


  rooms:Room[];
  constructor(private roomService: RoomService,private breadcrumbService:BreadcrumbService,private alertService:AlertService) { }

  ngOnInit() {
    this.getAllRooms().subscribe({

      next: rooms => {

        console.log("Got rooms: ", rooms);
        this.rooms=rooms;
      }
    });
  }
  getAllRooms() {

    return this.roomService.getAll();
  }

  roomSelected(room:Room) {
   // debugger;
    event.preventDefault();
    sessionStorage.setItem("room",JSON.stringify(room));
    this.alertService.success('Room selected');
    this.breadcrumbService.setBCMessage(room.areaName,room.roomName,"Test Incident");
  }

}
