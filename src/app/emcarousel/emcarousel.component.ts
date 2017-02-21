import { PostService } from './../services/postService';
import { Post } from '../models/post';
import { AlertService } from '../services/alert.service';
import { ChatService } from './../services/chat.service';
import {
  Message
} from './../common/api';
import {
  Car
} from './../models/car';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-emcarousel',
  templateUrl: './emcarousel.component.html',
  styleUrls: ['./emcarousel.component.css']
})
export class EmcarouselComponent implements OnInit {

  posts: Post[];



  msgs: Message[];

  constructor(private chatService:ChatService,private alertService:AlertService,private postService:PostService) {
    this.msgs = [];

  }

  selectCar(car: Car) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'EVENT Selected',
      detail: "Dispaly detail...."
    });
  }

  ngOnInit() {

     let inc=JSON.parse(sessionStorage.getItem('incident')).title;
     this.postService.getLatestPost(inc).subscribe({
      next: posts => {

       this.posts=posts;
       console.log(' posts'+this.posts);
      }
    });

      //add update user list functionality
      this.chatService.postPublished().subscribe(post=> {
        let p:Post=post;
        this.alertService.info("Post stored"+p.title);
        this.posts.unshift(post);
      });
  }

}
