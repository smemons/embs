import {
  Observable
} from 'rxjs';
import {
  Injectable
} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  // private url = 'http://localhost:3000';

  private socket = null;

  //enlist user as logged in
  chatLogin(userName: string) {
    this.socket = io({
      query: "userName=" + userName
    });
  }

  sendMessage(message) {
    this.socket.emit('em-message', message);
  }
  //user online now
  userOnline() {
    let observable = new Observable(observer => {
      if (this.socket == null) this.socket = io();
      this.socket.on('userOnline', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


//user offline now
  userOffline() {
    let observable = new Observable(observer => {
      if (this.socket == null) this.socket = io();
      this.socket.on('userOffline', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

//send a message to server that a new post is published, so that it can broadcast it
 postPublish(post) {
   debugger;
     if (this.socket == null) this.socket = io();
    this.socket.emit('postPublished', post);
  }
  //Post is published  now
  postPublished() {
    let observable = new Observable(observer => {
      if (this.socket == null) this.socket = io();
      this.socket.on('postPublished', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  /////////////////////////
  //when message arrive
  getMessages() {
    let observable = new Observable(observer => {
      if (this.socket == null) this.socket = io();
      this.socket.on('em-message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  ////////////////////////////////
  //update online user List

  updateOnlineUserList() {
    let observable = new Observable(observer => {
      if (this.socket == null) this.socket = io();
      this.socket.on('updateOnlineList', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
