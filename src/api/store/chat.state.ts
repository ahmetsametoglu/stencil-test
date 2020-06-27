import { createStore } from '@stencil/store';
import { SocketService } from '../services';
import { IUser } from '../models';

interface ChatState {
  selectedUser: IUser | null;
  connection: 'disconnected' | 'connected' | 'connecting';
  messages: string[];
  socket?: SocketService;
}

const { state } = createStore<ChatState>({
  selectedUser: null,
  connection: 'disconnected',
  messages: ['selam'],
});

export const ChatState = state;
