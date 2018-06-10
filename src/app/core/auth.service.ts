import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import { UserService, User } from './user.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  isLoggedIn: boolean;
  redirectUrl: string;
  afUser;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.user$ = afAuth.authState.pipe(
      switchMap(afUser => {
        this.afUser = afUser;
        if (afUser) {
          this.userService.setUid(afUser ? afUser.uid : null);
          return this.userService.getUserByUid(afUser.uid);
        } else {
          return of(null);
        }
      }),
      tap(user => this.userService.setUser(user))
    );

    this.loadingService.pageLoadingSource.next(true);

    this.user$.subscribe(user => {
      this.isLoggedIn = !!user;
      if (this.isLoggedIn) {
        if (this.redirectUrl) {
          this.router.navigateByUrl(this.redirectUrl);
          this.redirectUrl = null;
        }
      } else if (this.afUser) {
        this.userService.registerUser(this.afUser)
          .then(res => this.router.navigate(['users', this.afUser.gitHub]));
      }
      this.loadingService.pageLoadingSource.next(false);
    });
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    this.router.navigateByUrl('login');
    this.afAuth.auth.signOut();
  }
}
