import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Message, IMessage } from './message.model';

@Injectable()
export class DbService {
  constructor(private db: AngularFirestore) {}
  messages(): Observable<Message[]> {
    return (
      this.db
        // .collection('messages')
        .collection('messages', ref => ref.orderBy('timestamp', 'desc'))
        .stateChanges(['added'])
        .pipe(
          map(values => {
            return values.map(value => {
              const id = value.payload.doc.id;
              const payload = value.payload.doc.data() as IMessage;

              return new Message(
                id,
                payload.sender,
                new Date(payload.timestamp),
                payload.body
              );
            });
          })
        )
    );
  }
}
