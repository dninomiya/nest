import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'training',
    loadChildren: './training/training.module#TrainingModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'jobs',
    loadChildren: './jobs/jobs.module#JobsModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
