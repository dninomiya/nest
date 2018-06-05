import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

export interface User {
  uid: string;
  gitHub: string;
  status: string;
  rank: string;
  type: string;
  private?: {};
}

export const userTypes = [
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
    uid: '111',
    type: 'フルスタック',
    gitHub: 'deerboy',
    status: '活動中',
    rank: 'A'
  },
  {
    uid: '222',
    type: 'フロントエンド',
    gitHub: 'iwamotoW',
    status: '休眠中',
    rank: 'B'
  },
  {
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

  constructor(
    private db: AngularFirestore,
    private loadingService: LoadingService
  ) { }

  getUserByGitHub(gitHub: string): Observable<User> {
    this.loadingService.pageLoadingSource.next(true);

    return this.db
      .collection<User>('users', ref => ref.where('gitHub', '==', gitHub))
      .valueChanges()
      .pipe(
        tap(users => this.loadingService.pageLoadingSource.next(false)),
        map(users => users[0])
      );
  }

  getUserByUid(uid: string): Observable<User> {
    return this.db.doc<User>(`users/${uid}`).valueChanges();
  }
}
