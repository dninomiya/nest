import { Injectable } from '@angular/core';
import { map, tap, zip, switchMap, combineLatest } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';

export interface User {
  admin: boolean;
  uid: string;
  gitHub: string;
  status: string;
  rank: string;
  type: string;
  point: number;
}

export interface UserDataSet {
  publicData: User;
  privateData?: any;
}

export const UserTypes = [
  {
    id: 'front',
    label: 'フロントエンドエンジニア'
  },
  {
    id: 'server',
    label: 'サーバーサイドエンジニア'
  },
  {
    id: 'full',
    label: 'フルスタックエンジニア'
  },
  {
    id: 'native',
    label: 'ネイティブアプリエンジニア'
  },
  {
    id: 'unity',
    label: 'Unityエンジニア'
  }
];

export const MockUsers: User[] = [
  {
    admin: true,
    uid: '111',
    type: 'フルスタック',
    gitHub: 'deerboy',
    status: '活動中',
    rank: 'A'
  },
  {
    admin: false,
    uid: '222',
    type: 'フロントエンド',
    gitHub: 'iwamotoW',
    status: '休眠中',
    rank: 'B'
  },
  {
    admin: false,
    uid: '333',
    type: 'フロントエンド',
    gitHub: 'yuFuji',
    status: '休眠中',
    rank: 'C'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  uid: string;

  constructor(
    private db: AngularFirestore,
    private loadingService: LoadingService
  ) { }

  getUidByGitHub(gitHub: string): Observable<string> {
    return this.db
      .collection<User>('test_users', ref => ref.where('gitHub', '==', gitHub))
      .valueChanges()
      .pipe(
        map(users => users[0] ? users[0].uid : null)
      );
  }

  getUserByGitHub(gitHub: string): Observable<UserDataSet> {
    this.loadingService.pageLoadingSource.next(true);

    return this.getUidByGitHub(gitHub).pipe(
      switchMap(uid => {
        if (this.uid === uid || (this.user && this.user.admin)) {
          return this.getFullUserByUid(uid);
        } else {
          return this.getUserByUid(uid).pipe(
            map(user => {
              return {
                publicData: user
              };
            })
          );
        }
      }),
      tap(user => this.loadingService.pageLoadingSource.next(false))
    );
  }

  getFullUserByUid(uid: string): Observable<UserDataSet> {
    return this.getUserByUid(uid).pipe(
      combineLatest(
        this.db.collection(`test_users/${uid}/private`).valueChanges(),
        (publicData, privateCollection) => {
          let privateData = {};

          privateCollection.forEach(item => {
            privateData = Object.assign(privateData, item);
          });

          return {
            publicData: publicData,
            privateData: privateData,
          };
        }
      )
    );
  }

  getUserByUid(uid: string): Observable<User> {
    return this.db.doc<User>(`test_users/${uid}`).valueChanges();
  }

  getUserPrivateByUid(uid: string, doc: string): Observable<{}> {
    return this.db.doc(`test_users/${uid}/private/${doc}`).valueChanges();
  }

  updateUser(uid: string, data) {
    this.db.doc(`test_users/${uid}`).set(data, { merge: true });
  }

  updateUserExperiences(uid: string, data) {
    this.db
      .collection('test_users')
      .doc(uid)
      .collection('private')
      .doc('experience')
      .set(data, { merge: true });
  }

  updateUserEducations(uid: string, data) {
    this.db
      .collection('test_users')
      .doc(uid)
      .collection('private')
      .doc('educations')
      .set(data, { merge: true });
  }

  updateUserProfile(uid: string, data) {
    this.db
      .collection('test_users')
      .doc(uid)
      .collection('private')
      .doc('profile')
      .set(data, { merge: true });
  }

  setUid(uid: string) {
    this.uid = uid;
  }

  setUser(user: User) {
    this.user = user;
  }

  registerUser(afUser) {
    this.db.doc(`test_users/${afUser.uid}/private/profile`).set({
      email: afUser.email
    });

    return this.db.doc(`test_users/${afUser.uid}`).set({
      uid: afUser.uid,
      gitHub: afUser.providerData[0].uid,
      photoURL: afUser.photoURL,
      point: 0,
      rank: 'G'
    }, { merge: true });
  }

  getUsers() {
    this.loadingService.pageLoadingSource.next(true);

    return this.db.collection('test_users').valueChanges().pipe(
      tap(users => this.loadingService.pageLoadingSource.next(false))
    );
  }
}

