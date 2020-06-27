import { IUser } from './../models/user.model';
import { AccountState } from '../store/account.state';
export const AccountService = {
  loadUsers: async () => {
    AccountState.users = [...DummyUsers];
  },
};

const DummyUsers: IUser[] = [
  {
    _id: '1',
    name: 'Ahmet',
    image: './assets/avatar-1.png',
    chatIds: [],
    belongsTo: '1',
  },
  {
    _id: '2',
    name: 'Mehmet',
    image: './assets/avatar-2.png',
    chatIds: [],
    belongsTo: '1',
  },
  {
    _id: '3',
    name: 'Serdar',
    image: './assets/avatar-3.png',
    chatIds: [],
    belongsTo: '1',
  },
];
