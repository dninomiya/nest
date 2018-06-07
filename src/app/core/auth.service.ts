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

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.user$ = afAuth.authState.pipe(
      switchMap(afUser => {
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
      if (this.redirectUrl && this.isLoggedIn) {
        this.router.navigateByUrl(this.redirectUrl);
      } else {
        this.router.navigate(['/login']);
      }
      this.loadingService.pageLoadingSource.next(false);
    });
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('login');
  }
}
