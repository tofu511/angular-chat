import { Component } from '@angular/core';
import { Comment } from './class/comment';

// コメントのモックデータ
const COMMENTS: Comment[] = [
  { name: '竹井賢治', message: 'お疲れ様です!' },
  { name: '竹井賢治', message: 'おはようございます！' },
  { name: '五十嵐洋平', message: 'お疲れ様です!' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
