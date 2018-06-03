import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestDashboardComponent } from '../nest-dashboard/nest-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NestDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
