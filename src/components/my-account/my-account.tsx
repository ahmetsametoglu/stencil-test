import { Component, h, getAssetPath, Host } from '@stencil/core';
import { AccountState } from '../../api/store/account.state';
import { AccountService } from '../../api/services/account.service';
import { ChatState } from '../../api/store';

@Component({
  tag: 'my-account',
  styleUrl: 'my-account.scss',
  assetsDirs: ['assets'],
})
export class MyAccount {
  componentWillLoad() {
    AccountService.loadUsers();
  }

  render() {
    console.log('my-account render');
    return (
      <Host>
        <div class="header">
          <div class="title">Users</div>
        </div>

        <div class="user-list">
          {AccountState.users.map(user => (
            <ion-card
              key={user._id}
              class="user-item on-activatable ripple-parent"
              onClick={() => {
                ChatState.selectedUser = user;
              }}>
              <div class="avatar">
                <img src={getAssetPath(user.image)} alt={user.name} />
              </div>
              <div class="name">{user.name}</div>
              <ion-ripple-effect />
            </ion-card>
          ))}
        </div>
      </Host>
    );
  }
}
