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
  constructor(private roomService: RoomService,private breadcrumbService:BreadcrumbService) { }

  ngOnInit() {
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

  roomSelected(event) {
    debugger;
    event.preventDefault();
    this.breadcrumbService.setBCMessage("my area","roomName","title");
  }

}
