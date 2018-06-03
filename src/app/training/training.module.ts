import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule
  ],
  declarations: [TrainingComponent]
})
export class TrainingModule { }
