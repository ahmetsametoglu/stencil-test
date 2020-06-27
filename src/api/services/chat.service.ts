import { ChatState } from '@api/store';

export const ChatService = {
  sendMessage: (message: string) => (ChatState.messages = [...ChatState.messages, message]),
};
