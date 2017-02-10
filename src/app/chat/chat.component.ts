import { AlertService } from './../services/alert.service';
import {
  Userservice
} from './../services/userservice.service';
import {
  AuthService
} from './../services/auth.service';

import {
  Messages
} from 'primeng/primeng';
import {
  ChatService
} from './../services/chat.service';
import {
  Router
} from '@angular/router';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  userList:any=[];
  connection;
  message;

  socket = null;

  constructor(private chatService: ChatService, private authService: AuthService,private alertService:AlertService) {


  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';

  }

  ngOnInit() {

    //if user is logged in store him on server and update the list on the user side
    if (this.authService.isUserLoggedin) {

      this.chatService.chatLogin(this.authService.getCurrentUser());

       //when user came online arived
      this.connection=this.chatService.userOnline().subscribe(user => {
         this.alertService.info(`${user} is online`);
      });
      //when user went offline arived
      this.connection=this.chatService.userOffline().subscribe(user => {
         this.alertService.warn(`${user} is onffline`);
      });

      //when message arrived
      this.chatService.getMessages().subscribe(message => {
        this.messages.push(message);
      });

      //add update user list functionality
      this.chatService.updateOnlineUserList().subscribe(list => {
        this.userList=list;
      });
    }
  }

  ngOnDestroy() {
   // this.connection.unsubscribe();
   this.userList="";
  }

}
