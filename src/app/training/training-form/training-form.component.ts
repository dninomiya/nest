import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrainingService, groups } from '../../core/training.service';

@Component({
  selector: 'nest-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss']
})
export class TrainingFormComponent implements OnInit {

  tid = this.route.snapshot.params.id;
  groups = groups;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private trainingService: TrainingService
  ) {
    if (this.tid) {
      this.trainingService.getTraining(this.tid);
    } else {
      this.createForm();
    }

    console.log(this.tasks);
  }

  ngOnInit() {
  }

  createForm(data?) {
    this.form = this.fb.group({
      permalink: [data ? data.permalink : ''],
      group: [data ? data.group : ''],
      title: [data ? data.title : ''],
      tasks: this.createTasks(data ? data.tasks : [null]),
    });
  }

  get tasks(): FormArray {
    return this.form.get('tasks') as FormArray;
  }

  createTasks(items) {
    return this.fb.array(items.map(task => {
      return this.fb.group({
        title: [task ? task.title : null],
        point: [task ? task.point : null],
      });
    }));
  }

  addTask() {
    this.tasks.push(this.fb.group({
      title: [null],
      point: [null],
    }));
  }

  onSubmit() {
    if (this.tid) {
      this.trainingService.editTraining(this.tid, this.form.value);
    } else {
      this.trainingService.addTraining(this.form.value);
    }
  }

}
