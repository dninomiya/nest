import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  point: number;
}

export interface Training {
  title: string;
  tasks: Task[];
  permalink: string;
  group: string;
}

export const groups = [
  {
    id: 'init',
    label: '準備'
  },
  {
    id: 'basic',
    label: '基礎'
  },
  {
    id: 'front',
    label: '基礎'
  }
];

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  getTraining(tid: string) {

  }

  addTraining(data) {

  }

  editTraining(tid: string, data) {

  }
}
