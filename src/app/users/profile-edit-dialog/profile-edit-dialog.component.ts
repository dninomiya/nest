import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatDialogRef } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { UserService, UserTypes } from '../../core/user.service';
import * as moment from 'moment';

@Component({
  selector: 'nest-profile-edit-dialog',
  templateUrl: './profile-edit-dialog.component.html',
  styleUrls: ['./profile-edit-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class ProfileEditDialogComponent implements OnInit {

  form: FormGroup;
  userTypes = UserTypes;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<ProfileEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.uid) {
      this.userService.getFullUserByUid(data.uid).subscribe(user => {
        this.createForm(user);
      });
    }
  }

  ngOnInit() {
  }

  createForm(user?) {
    const publicData = user.publicData;
    const privateData = user.privateData;

    this.form = this.fb.group({
      type: publicData ? publicData.type : null,
      private: this.createPrivateFormGroup(privateData ? privateData : null)
    });
  }

  createPrivateFormGroup(privatedata?) {
    return this.fb.group({
      tel: [privatedata ? privatedata.tel : null, Validators.required],
      email: [privatedata ? privatedata.email : null, Validators.required],
      adobe: [privatedata ? privatedata.adobe : null],
      bday: [privatedata ? moment(privatedata.bday) : null, Validators.required],
      gender: [privatedata ? privatedata.gender : null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = Object.assign({}, this.form.value);
      data.private.bday = data.private.bday.toString();
      this.userService.updateUser(this.data.uid, {type: data.type});
      this.userService.updateUserProfile(this.data.uid, data.private);
      this.dialogRef.close();
    }
  }
}
