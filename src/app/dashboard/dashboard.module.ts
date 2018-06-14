import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NestDashboardComponent } from './nest-dashboard/nest-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RankDialogComponent } from '../shared/rank-dialog/rank-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    NestDashboardComponent,
    RankDialogComponent
  ],
  entryComponents: [RankDialogComponent]
})
export class DashboardModule { }
