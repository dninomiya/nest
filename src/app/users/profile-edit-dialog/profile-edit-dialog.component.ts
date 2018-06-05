import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { UserService, userTypes } from '../../core/user.service';

@Component({
  selector: 'nest-profile-edit-dialog',
  templateUrl: './profile-edit-dialog.component.html',
  styleUrls: ['./profile-edit-dialog.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ProfileEditDialogComponent implements OnInit {

  form: FormGroup;
  userTypes = userTypes;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
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

  createForm(user?) {
    this.form = this.fb.group({
      type: user ? user.type : null,
      private: this.createPrivateFormGroup(user ? user.private : null)
    });
  }

  createPrivateFormGroup(privatedata?) {
    return this.fb.group({
      tel: [privatedata ? privatedata.tel : null, Validators.required],
      email: [privatedata ? privatedata.email : null, Validators.required],
      adobe: [privatedata ? privatedata.adobe : null],
      bday: [privatedata ? privatedata.bday : null, Validators.required],
      gender: [privatedata ? privatedata.gender : null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.userService.updateUser(this.data.uid, this.form.value);
    }
  }

}
