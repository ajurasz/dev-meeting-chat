import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messages: Message[];
  constructor(private db: DbService) {}
  ngOnInit() {
    this.db.messages().subscribe(messages => {
      this.messages = messages;
    });
  }
}
