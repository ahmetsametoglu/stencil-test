import { ChatState } from '@api/store';
import io from 'socket.io-client';

const SocketURL = 'localhost:4000';

export class SocketService {
  private messageChannel = 'ahmet-channel';
  private socket: SocketIOClient.Socket;
  constructor(url?: string) {
    this.socket = io(url || SocketURL);
  }
  startListen() {
    this.socket.on('connect', this.onConnect);
    this.socket.on('disconnect', this.onDisconnect);
    this.socket.on('reconnecting', this.onReconnecting);
    this.socket.on('ahmet-channel', this.listenChannel);
  }
  private onConnect(e: any) {
    console.log('onConnect', e);
    ChatState.connection = 'connected';
  }
  private onDisconnect(e: any) {
    console.log('onDisconnect', e);
    ChatState.connection = 'disconnected';
  }
  private onReconnecting(e: any) {
    console.log('onReconnecting', e);
    ChatState.connection = 'connecting';
  }

  private listenChannel(e: any) {
    console.log(this.messageChannel, e); // ???: confused here messageChannel degiskenine nasil ulasabilirim @serdaryilmaz1323

    const message = `message from server => ${e}`;
    ChatState.messages = [...ChatState.messages, message];
  }

  sendMessage(message: string) {
    this.socket.emit(this.messageChannel, message);
  }

  dispose() {
    this.socket.close();
    this.socket.removeAllListeners();
  }
}
