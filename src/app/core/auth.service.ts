import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import { UserService, User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {
    afAuth.authState.pipe(
      switchMap(afUser => {
        this.userService.setUid(afUser ? afUser.uid : null);
        return this.userService.getUserByUid(afUser.uid);
      }),
      tap(user => this.userService.setUser(user))
    ).subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
