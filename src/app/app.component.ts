import { Component } from '@angular/core';
import { Comment } from './class/comment';
import { User } from './class/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const CURRENT_USER: User = new User(1, '五十嵐洋平');
const ANOTHER_USER: User = new User(2, '竹井賢治');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments: Comment[];
  commentsRef: AngularFireList<any>;
  currentUser = CURRENT_USER;
  content = '';

  constructor(private db: AngularFireDatabase) {
    this.commentsRef = db.list('/comments');
    this.commentsRef.snapshotChanges()
      .subscribe(snapshots => {
        this.comments = snapshots.map(snapshot => {
          const values = snapshot.payload.val(); // データの内容を取得
          return new Comment({ key: snapshot.payload.key, ...values });
        });
      });
  }

  // コメントを最後に追加する
  addComment(comment: string): void {
    if (comment) {
      this.commentsRef.push(new Comment({ user: this.currentUser, message: comment }));
      this.content = ''; // 入力後のテキストエリアを初期化
    }
  }

  toggleEditComment(index: number): void {
    this.comments[index].isEdit = !this.comments[index].isEdit;
  }

  saveEditComment(index: number, key: string): void {
    this.commentsRef.update(key, {
      message: this.comments[index].message,
      date: this.comments[index].date
    })
      .then(() => {
        this.comments[index].isEdit = false;
      });
  }
}
