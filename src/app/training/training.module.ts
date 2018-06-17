import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingFormComponent } from './training-form/training-form.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ],
  declarations: [TrainingComponent, TrainingFormComponent]
})
export class TrainingModule { }
