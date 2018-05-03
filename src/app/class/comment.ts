import { format } from 'date-fns';
import { User } from './user';

export class Comment {
  user: User;
  initial: string;
  message: string;
  date: string;
  key?: string; // 省略可能なので?が付いている
  isEdit: boolean;

  constructor(values: any) {
    this.user = values.user;
    this.initial = values.initial || values.user.name.slice(0, 1);
    this.message = values.message;
    this.date = values.date || format(new Date()); // Unix timestampに日付を整形
    if (values.key) {
      this.key = values.key;
    }
  }
}
