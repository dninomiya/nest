import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface User {
  uid: string;
  gitHub: string;
  status: string;
  rank: string;
  type: string;
  private?: {};
}

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
    private db: AngularFirestore
  ) { }

  getUser(gitHub: string): Observable<User> {
    return this.db
      .collection<User>('users', ref => ref.where('gitHub', '==', gitHub))
      .valueChanges()
      .pipe(
        map(users => users[0])
      );
  }
}
