import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule,
    MarkdownModule.forRoot()
  ],
  declarations: [TrainingComponent, TrainingDetailComponent]
})
export class TrainingModule { }
