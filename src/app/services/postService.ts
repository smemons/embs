import { AuthService } from './auth.service';
import {
  Observable
} from 'rxjs';

import {
  Post
} from './../models/post';
import {
  Http,
  Response,
  URLSearchParams
} from '@angular/http';
import {
  Injectable
} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http,private authService:AuthService) {}

  create( post:Post) {
    debugger;
    console.log('posting Post from service: ' + post);
    let currentUser:string="";
    let currentIncident:string="";
    //get the logged in user to set it in Post
    if(this.authService.isUserLoggedin)
    {
      currentUser=this.authService.getCurrentUser();
      currentIncident=this.authService.getCurrentIncident();

    }
    else
    {
      currentUser="Shoukat";
    }
    post.createdBy=currentUser;
    post.incidentName=currentIncident;

    return this
      .http
      .post('/api/post', post)
      .map((response: Response) => response.json());
  }

  // //get all RoomService
  // getAll() {
  //   return this
  //     .http
  //     .get('/api/room/all')
  //     .map((response: Response) => response.json());
  // }

  // //get room by roomName
  // getRoomByName(roomName: string) {
  //   debugger;


  //   return this.http

  //     .get('/api/room/byName/'+roomName)
  //     .map((res: Response) => res.json());

  // }

}
