import { Component, h, Host } from '@stencil/core';
import { ChatState } from '@api/store';

@Component({
  tag: 'my-chat-app',
  styleUrl: 'my-chat-app.scss',
})
export class MyChatApp {
  componentWillLoad() {
    console.log('my-chat-app will load');
  }

  render() {
    console.log('my-chat-app render');
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
        <div class="chat-app"></div>
      </Host>
    );
  }
}
