import { RoomService } from './../../services/room.service';
import { AlertService } from './../../services/alert.service';

import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'new-room',
    templateUrl: 'new-room.component.html',
    styleUrls: ['new-room.component.css']
})
export class NewRoomComponent {
 model: any = {};
    loading = false;

    constructor(
        private router: Router,
       private roomService: RoomService,
       private alertService: AlertService
     ) { }
createRoom()
{
      console.log(this.model);
        this.loading = true;
         this.roomService.create(this.model)
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
