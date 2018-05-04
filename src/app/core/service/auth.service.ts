import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  authSubject = new Subject<any>();
  auth$ = this.authSubject.asObservable();


  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase) {

  }

  create(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.router.navigate(['/']); // Userが作成できたらトップページへ遷移する
      });
  }

}
