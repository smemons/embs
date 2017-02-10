
import { Room } from './../models/room';
import { Http, Response,URLSearchParams} from '@angular/http';
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

  //get room by roomName
  getRoomByName(roomName:string):Room
  {
    debugger;
    let params: URLSearchParams = new URLSearchParams();
 params.set('roomName', roomName);
   return this
      .http
      .get('/api/room/byName',{search:params})
      .map((response: Response) => response.json());





  }
  }

