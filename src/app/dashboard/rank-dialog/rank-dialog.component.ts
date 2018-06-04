import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nest-rank-dialog',
  templateUrl: './rank-dialog.component.html',
  styleUrls: ['./rank-dialog.component.scss']
})
export class RankDialogComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'day', 'month'];
  dataSource = [
    {
      rank: 'A',
      day: '35,000',
      month: '700000'
    },
    {
      rank: 'A',
      day: '35,000',
      month: '700000'
    },
    {
      rank: 'A',
      day: '35,000',
      month: '700000'
    },
    {
      rank: 'A',
      day: '35,000',
      month: '700000'
    },
    {
      rank: 'A',
      day: '35,000',
      month: '700000'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
