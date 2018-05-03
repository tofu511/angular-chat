import { User } from './user';

export class Comment {
  user: User;
  initial: string;
  message: string;

  constructor(user: User, message: string) {
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.message = message;
  }
}
