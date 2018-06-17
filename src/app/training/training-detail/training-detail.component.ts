import { Component, OnInit } from '@angular/core';
import { Training, TrainingService } from '../../core/training.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nest-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent implements OnInit {

  training: Training = this.trainingService.getTraining(
    this.route.snapshot.params.gid,
    this.route.snapshot.params.tid,
  );

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
