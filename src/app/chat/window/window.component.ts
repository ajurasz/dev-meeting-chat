import { Component, OnInit } from '@angular/core';
import { Message } from '../../shared/message.model';
import { DbService } from '../../shared/db.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  messages: Message[];
  constructor(private db: DbService) {}
  ngOnInit() {
    this.db.messages().subscribe(messages => {
      this.messages = messages;
    });
  }
}
