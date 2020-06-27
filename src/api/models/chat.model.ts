import { IMessage } from './message.model';

export interface IChat {
  _id: string;
  name: string;
  image: string;
  type: 'group' | 'private';
  memberIds: string[]; //user_id
  lastMessage: IMessage;
}
