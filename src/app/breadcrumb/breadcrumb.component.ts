import { AlertService } from './../services/alert.service';
import { PostService } from './../services/postService';
import { BreadcrumbService } from './../services/breadcrumb.service';
import { BCMsg } from './../models/BCMsg';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  model: any = {};
   display: boolean = false;
  loading = false;
  isRoomSelect:boolean=false;
  isIncidentSelected:boolean=false;
  bcmsg:BCMsg;
  constructor(private breadcrumbService:BreadcrumbService,private postService:PostService,private alertService:AlertService) {

   }

  ngOnInit() {
     this.breadcrumbService.getMessage().subscribe(message => {
       this.isRoomSelect=true;
       this.bcmsg=message;

       //see if incident is selected as well
       if(!this.bcmsg.incTitle)
       {
         this.isIncidentSelected=false;
       }
       else
       {
         this.isRoomSelect=true;
         this.isIncidentSelected=true;
       }

      });
  }


    showDialog() {
        this.display = true;
    }

    savePostHideDialog() {
      this.loading=true;
      debugger;
       event.preventDefault();
      console.log(this.model);
      this.postService.create(this.model).subscribe(
                data => {
                   console.log('Post created - Service!');
                    this.alertService.success("Post published!");

                },
                error => {

                    console.log(error);
                    this.alertService.error(error._body);
                    this.loading = false;
                });

      this.display = false;
      this.loading=false;

    }
    hideDialog()
    {
        this.display = false;
    }

}
