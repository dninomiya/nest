import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  point: number;
}

export const trainingModel = {
  'basic': {
    'installation': {
      title: '準備',
      tasks: [
        {
          title: 'VSCインストール',
          point: 10
        }
      ]
    }
  }
};

export interface Training {
  id: string;
  title: string;
  tasks: Task[];
}

export const groups = [
  {
    id: 'basic',
    label: '基礎',
    description: '基礎トレーニングを行います。'
  },
  {
    id: 'front',
    label: 'フロントエンド',
    description: '基礎トレーニングを行います。'
  },
  {
    id: 'back',
    label: 'バックエンド',
    description: '基礎トレーニングを行います。'
  },
  {
    id: 'designer',
    label: 'デザイナー',
    description: '基礎トレーニングを行います。'
  },
  {
    id: 'director',
    label: 'ディレクター',
    description: '基礎トレーニングを行います。'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  addTraining(data) {

  }

  getTraining(gid: string, tid: string): Training {
    return trainingModel[gid][tid];
  }

  getTrainings(group: string): Training[] {
    return trainingModel[group];
  }

  getGroups() {
    console.log(groups);
    return groups;
  }
}
