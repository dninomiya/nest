import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { NestDashboardComponent } from './nest-dashboard/nest-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    NestDashboardComponent,
  ],
})
export class DashboardModule { }
