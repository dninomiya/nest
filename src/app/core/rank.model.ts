export interface Rank {
  rank: string;
  day: number;
  month: number;
  description: string;
  point: number;
}

export const Ranks: Rank[] = [
  {
    rank: 'S',
    day: 100000,
    month: 2000000,
    description: 'レジェンド',
    point: 800000,
  },
  {
    rank: 'B',
    day: 50000,
    month: 1000000,
    description: 'エリート',
    point: 200000,
  },
  {
    rank: 'B',
    day: 30000,
    month: 600000,
    description: 'ハイクラス',
    point: 100000,
  },
  {
    rank: 'C',
    day: 20000,
    month: 400000,
    description: 'ミドルクラス',
    point: 30000,
  },
  {
    rank: 'D',
    day: 10000,
    month: 200000,
    description: 'ロークラス',
    point: 4000,
  },
  {
    rank: 'E',
    day: null,
    month: null,
    description: 'アシスタント',
    point: 3000,
  },
  {
    rank: 'F',
    day: null,
    month: null,
    description: 'トレーニング',
    point: 100,
  },
  {
    rank: 'G',
    day: null,
    month: null,
    description: '体験者',
    point: 0,
  }
];
