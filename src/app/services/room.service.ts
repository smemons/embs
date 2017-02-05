
import { Room } from './../models/room';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

constructor(private http: Http){ }

create(room:Room)
{
   console.log('posting room from service: ' + room);
    //return this.http.post('/api/user', JSON.stringify(user), this.options);
    return this
      .http
      .post('/api/room', room)
      .map((response: Response) => response.json());
}

//get all RoomService
 getAll() {
    return this
      .http
      .get('/api/room/all')
      .map((response: Response) => response.json());
  }
}
