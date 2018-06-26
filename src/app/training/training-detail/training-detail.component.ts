import { Component, OnInit } from '@angular/core';
import { Training, TrainingService } from '../../core/training.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'nest-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.scss']
})
export class TrainingDetailComponent implements OnInit {

  group = this.route.snapshot.params.gid;
  title = this.route.snapshot.params.tid;

  doc = require(`raw-loader!./docs/${this.group}/${this.title}.md`);

  training: Training = this.trainingService.getTraining(
    this.group,
    this.title,
  );

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
