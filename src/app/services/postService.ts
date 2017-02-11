
import { ChatService } from './chat.service';
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

  constructor(private http: Http,private authService:AuthService,private chatService:ChatService) {}

  create( post:Post) {

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

    //just broadcast a new post Message
    this.chatService.postPublish(post);

    return this
      .http
      .post('/api/post', post)
      .map((response: Response) => response.json());
  }

  // //get all Posts
  getAll() {
    return this
      .http
      .get('/api/post/all')
      .map((response: Response) => response.json());
  }

  //get latest posts
  getLatestPost(incName: string) {
    return this.http
      .get('/api/post/latest/'+incName)
      .map((res: Response) => res.json());

  }

}
