import { Messages } from 'primeng/primeng';
import { ChatService } from './../services/chat.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  socket=null;

  constructor(private chatService:ChatService) {

      // this.socket = io();
      //   this.socket.on('mymessage', function(data){
      //       this.messages.push(data);
      //       console.log(data);
      //   }.bind(this));
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
    // this.socket.emit('mymessage', this.message);
    // this.message='';
  }

  ngOnInit() {
    this.chatService.chatLogin("Shoukat");
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
