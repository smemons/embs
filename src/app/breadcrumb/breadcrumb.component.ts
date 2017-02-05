import { BreadcrumbService } from './../services/breadcrumb.service';
import { BCMsg } from './../models/BCMsg';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  isRoomSelect:boolean=false;
  bcmsg:BCMsg;
  constructor(private breadcrumbService:BreadcrumbService) {

   }

  ngOnInit() {
     this.breadcrumbService.getMessage().subscribe(message => {
       this.isRoomSelect=true;
       this.bcmsg=message;

      });
  }

}
