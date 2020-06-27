import { createStore } from '@stencil/store';
import { IUser } from '../models';

interface AccountState {
  users: IUser[];
}

const { state } = createStore<AccountState>({
  users: [],
});

export const AccountState = state;
