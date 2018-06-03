import { Injectable } from '@angular/core';

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

  constructor() { }
}
