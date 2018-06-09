export class Message {
  constructor(
    public sender: string,
    public timestamp: Date,
    public body: string
  ) {}
}

export interface IMessage {
  sender: string;
  timestamp: number;
  body: string;
}
