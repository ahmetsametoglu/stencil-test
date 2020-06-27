import { Component, h, Host } from '@stencil/core';
import { ChatState } from '../../api/store';

@Component({
  tag: 'my-chat-room',
  styleUrl: 'my-chat-room.scss',
})
export class MyChatRoom {
  componentWillLoad() {
    console.log('my-chat-room will load');
  }

  render() {
    console.log('my-chat-room render');
    return (
      <Host>
        <div class="header">
          <div class="title">Chat Room</div>
          <ion-button
            size="large"
            color="dark"
            slot="icon-only"
            fill="clear"
            onClick={() => {
              ChatState.selectedUser = null;
            }}>
            <ion-icon name="close" />
          </ion-button>
        </div>
        <div class="chat-room"></div>
      </Host>
    );
  }
}
