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
  selector: 'nest-education-edit-dialog',
  templateUrl: './education-edit-dialog.component.html',
  styleUrls: ['./education-edit-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class EducationEditDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<EducationEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.uid) {
      this.userService.getUserPrivateByUid(data.uid, 'educations').subscribe(user => {
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
    const items = (user && user.educations && user.educations[0]) ? user.educations : [{}];
    this.form = this.fb.group({
      educations: this.fb.array(
        items.map(item => {
          return this.fb.group({
            start: [item && item.start ? moment(new Date(item.start)) : moment(), Validators.required],
            end: [item && item.end ? moment(new Date(item.end)) : moment()],
            name: [item ? item.name : null, Validators.required],
            description: [item ? item.description : null, Validators.required],
          });
        })
      )
    });
  }

  get educations(): FormArray {
    return this.form.get('educations') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      const data = Object.assign({}, this.form.value);
      data.educations = data.educations.map(education => {
        return {
          start: education.start.toString(),
          end: education.end.toString(),
          name: education.name,
          description: education.description,
        };
      });
      this.userService.updateUserEducations(this.data.uid, data);
      this.dialogRef.close();
    }
  }

  removeCtrl(index) {
    this.educations.removeAt(index);
  }

  addCtrl() {
    this.educations.push(this.fb.group({
      start: [moment(), Validators.required],
      end: [moment()],
      name: [null, Validators.required],
      description: [null, Validators.required],
    }));
  }

}
