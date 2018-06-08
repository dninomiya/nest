import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../core/user.service';
import { Ranks } from '../core/rank.model';

@Pipe({
  name: 'needRank'
})
export class NeedRankPipe implements PipeTransform {

  transform(user: User, args?: any): any {
    const ranks = Ranks;
    const currentIndex = ranks.findIndex(rank => rank.rank === user.rank);
    const nextRankPoint = ranks[currentIndex - 1].point;
    const diffPoint = nextRankPoint - user.point;

    if (currentIndex === 0) {
      return null;
    }

    return {
      point: diffPoint < 0 ? 0 : diffPoint,
      percent: user.point === 0 ? 0 : 50 / nextRankPoint * 100
    };
  }

}
