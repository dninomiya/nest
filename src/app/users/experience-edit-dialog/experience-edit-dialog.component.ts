import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatDatepicker, MatDialogRef } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import * as _moment from 'moment';

import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'YYYY/MM',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'nest-experience-edit-dialog',
  templateUrl: './experience-edit-dialog.component.html',
  styleUrls: ['./experience-edit-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class ExperienceEditDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ExperienceEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.uid) {
      this.userService.getUserByUid(data.uid).subscribe(user => {
        this.createForm(user);
      });
    }
  }

  ngOnInit() {
  }

  chosenYearHandler(normalizedYear: Moment, ctrl: FormControl) {
    const ctrlValue = (ctrl.value && ctrl.value.year) ? ctrl.value : moment();
    ctrlValue.year(normalizedYear.year());
    ctrl.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>, ctrl: FormControl) {
    const ctrlValue = ctrl.value;
    ctrlValue.month(normlizedMonth.month());
    ctrl.setValue(ctrlValue);
    datepicker.close();
  }

  createForm(user) {
    const items = user.experiences || [];
    this.form = this.fb.group({
      experiences: this.fb.array(
        items.map(item => {
          return this.fb.group({
            start: [item ? moment(item.start) : moment(), Validators.required],
            end: [item ? moment(item.end) : moment(), Validators.required],
            name: [item ? item.name : null, Validators.required],
            description: [item ? item.description : null, Validators.required],
          });
        })
      )
    });
  }

  get experiences(): FormArray {
    return this.form.get('experiences') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const data = Object.assign({}, this.form.value);
      data.experiences = data.experiences.map(experience => {
        return {
          start: experience.start.toString(),
          end: experience.end.toString(),
          name: experience.name,
          description: experience.description,
        };
      });
      this.userService.updateUser(this.data.uid, data);
      this.dialogRef.close();
    }
  }

  removeCtrl(index) {
    this.experiences.removeAt(index);
  }

  addExperience() {
    this.experiences.push(this.fb.group({
      start: [moment(), Validators.required],
      end: [moment(), Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
    }));
  }

}
