import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RankDialogComponent } from '../../shared/rank-dialog/rank-dialog.component';

@Component({
  selector: 'nest-dashboard',
  templateUrl: './nest-dashboard.component.html',
  styleUrls: ['./nest-dashboard.component.scss']
})
export class NestDashboardComponent {
  constructor(private dialog: MatDialog) { }

  openRankDialog(): void {
    const dialogRef = this.dialog.open(RankDialogComponent, {
      width: '600px'
    });
  }
}
