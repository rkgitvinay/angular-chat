import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string = '';
  messageQueue: any = [];
  constructor(
    private chat:ChatService
  ) { }

  ngOnInit() {
  }

  

  sendMessage() {
    this.messageQueue.push({
      type : true,
      message: this.message
    })
    this.chat.sendMessageService(this.message).subscribe(
      data => {
        this.messageQueue.push({
          type : false,
          message: data['message']
        })
        this.message = '';
      }, err => {
        console.log(err);
      }, () => {
        console.log(this.messageQueue);
      }
    )
  }

}
