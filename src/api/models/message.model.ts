export interface IMessage {
  _id: string;
  from: string;
  to: string;
  time: Date;
  text: string;
}
