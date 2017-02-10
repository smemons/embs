import {
  Observable
} from 'rxjs';

import {
  Room
} from './../models/room';
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
export class RoomService {

  constructor(private http: Http) {}

  create(room: Room) {
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
  getRoomByName(roomName: string) {
    debugger;


    return this.http

      .get('/api/room/byName/'+roomName)
      .map((res: Response) => res.json());

  }

}
