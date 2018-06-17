import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { TrainingFormComponent } from './training-form/training-form.component';
import { AuthAdminGuard } from '../core/auth-admin.guard';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    pathMatch: 'full'
  },
  {
    path: ':gid/:tid',
    component: TrainingDetailComponent,
    canActivate: [AuthAdminGuard],
    canLoad: [AuthAdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
