
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

 // private url = 'http://localhost:3000';

  private socket=null;

  //enlist user as logged in
  chatLogin(userName:string)
  {
   this.socket=io({ query: "userName=" + userName });
  }

  sendMessage(message){
    this.socket.emit('em-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      if(this.socket==null)this.socket = io();
      this.socket.on('em-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
