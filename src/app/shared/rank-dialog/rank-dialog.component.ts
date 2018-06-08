import { Component, OnInit } from '@angular/core';
import { Ranks } from '../../core/rank.model';

@Component({
  selector: 'nest-rank-dialog',
  templateUrl: './rank-dialog.component.html',
  styleUrls: ['./rank-dialog.component.scss']
})
export class RankDialogComponent implements OnInit {

  displayedColumns: string[] = ['rank', 'day', 'month'];
  dataSource = Ranks;

  constructor() { }

  ngOnInit() {
  }

}
