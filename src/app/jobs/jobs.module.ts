import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ],
  declarations: [JobListComponent, JobDetailComponent]
})
export class JobsModule { }
