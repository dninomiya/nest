import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../core/training.service';

@Component({
  selector: 'nest-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  groups = this.trainingService.getGroups();

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
  }

}
