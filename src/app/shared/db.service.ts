import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, IMessage } from './message.model';

@Injectable()
export class DbService {
  constructor(private db: AngularFirestore) {}
  messages(): Observable<Message[]> {
    return this.db
      .collection('messages')
      .valueChanges()
      .pipe(
        map(values => {
          return values.map(value => {
            const payload = value as IMessage;
            console.log(payload);
            return new Message(
              payload.sender,
              new Date(payload.timestamp),
              payload.body
            );
          });
        })
      );
  }
}
