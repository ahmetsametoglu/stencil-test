export interface IUser {
  _id: string;
  image: string;
  name: string;
  chatIds: string[];
  belongsTo: string; //account_id
}
