import { send } from 'q';

export class Message {
  readonly sender: string;
  readonly timestamp: Date;
  readonly body: string;
  readonly id?: string;
  constructor(message: IMessage) {
    this.id = message.id;
    this.sender = message.sender;
    if (message.timestamp === undefined || message.timestamp === null) {
      this.timestamp = new Date();
    } else {
      this.timestamp = new Date(message.timestamp);
    }
    this.body = message.body;
  }

  toWriteObject() {
    return {
      sender: this.sender,
      body: this.body,
      timestamp: this.timestamp.getTime()
    };
  }
}

export interface IMessage {
  sender: string;
  timestamp: number;
  body: string;
  id?: string;
}
