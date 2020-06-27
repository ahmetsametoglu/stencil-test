import { Component, h, Host } from '@stencil/core';
import { ChatState } from '../../api/store';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss',
})
export class MyApp {
  componentWillLoad() {
    console.log('my-app will load');
    // const socketService = new SocketService();
    // socketService.startListen();
    // ChatState.socket = socketService;
  }

  // componentDidUnload() {
  //   if (ChatState.socket) {
  //     ChatState.socket.dispose();
  //   }
  // }

  render() {
    console.log('my-app render');
    return (
      <Host>
        <div class="app-container">
          {!ChatState.selectedUser && <my-account />}
          {ChatState.selectedUser && <my-chat-room />}
        </div>
      </Host>
    );
  }
}
