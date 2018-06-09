export class Message {
  constructor(
    public id: string,
    public sender: string,
    public timestamp: Date,
    public body: string
  ) {}

  static sample(): Message {
    return new Message('id', 'name', new Date(), 'message');
  }
}

export interface IMessage {
  id: string;
  sender: string;
  timestamp: number;
  body: string;
}
