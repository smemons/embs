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

  cars: Car[];

  msgs: Message[];

  constructor(private chatService:ChatService,private alertService:AlertService,private postService:PostService) {
    this.msgs = [];
    this.cars = [{
        vin: 'r3278r2',
        year: 2010,
        brand: 'Audi',
        color: 'Black'
      },
      {
        vin: 'jhto2g2',
        year: 2015,
        brand: 'BMW',
        color: 'White'
      },
      {
        vin: 'h453w54',
        year: 2012,
        brand: 'Honda',
        color: 'Blue'
      },
      {
        vin: 'g43gwwg',
        year: 1998,
        brand: 'Renault',
        color: 'White'
      },
      {
        vin: 'gf45wg5',
        year: 2011,
        brand: 'VW',
        color: 'Red'
      },
      {
        vin: 'bhv5y5w',
        year: 2015,
        brand: 'Jaguar',
        color: 'Blue'
      },
      {
        vin: 'ybw5fsd',
        year: 2012,
        brand: 'Ford',
        color: 'Yellow'
      },
      {
        vin: '45665e5',
        year: 2011,
        brand: 'Mercedes',
        color: 'Brown'
      },
      {
        vin: 'he6sb5v',
        year: 2015,
        brand: 'Ford',
        color: 'Black'
      }
    ];
  }

  selectCar(car: Car) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Car Selected',
      detail: 'Vin:' + car.vin
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
      this.chatService.postPublished().subscribe(post => {
        this.alertService.info("Post stored"+post);
      });
  }

}
