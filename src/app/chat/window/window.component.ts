import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../shared/message.model';
import { DbService } from '../../shared/db.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  messages$ = new BehaviorSubject([]);
  constructor(private db: DbService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.db.messages().subscribe(messages => {
        this.messages$.next([...messages, ...this.messages$.getValue()]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(_ => _.unsubscribe);
  }
}
