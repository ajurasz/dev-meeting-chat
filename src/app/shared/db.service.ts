import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { of, from, defer } from 'rxjs';
import { Message, IMessage } from './message.model';

@Injectable()
export class DbService {
  constructor(private db: AngularFirestore) {}

  messages(): Observable<Message[]> {
    return (
      this.db
        .collection('messages', ref => ref.orderBy('timestamp', 'desc'))
        .stateChanges(['added'])
        .pipe(
          map(values => {
            return values.map(value => {
              const id = value.payload.doc.id;
              const payload = value.payload.doc.data() as IMessage;

              return new Message({
                ...payload,
                id
              });
            });
          })
        )
    );
  }

  add(message: Message): Observable<Boolean> {
    return defer(() => from(this.db.collection('messages').add(message.toWriteObject()))
    .pipe(
      delay(1000),
      map(_ => true),
      catchError(err => {
        console.error('Failed to add', err);
        return of(false);
      })
    );
  }
}
