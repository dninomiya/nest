import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MAT_DATE_LOCALE } from '@angular/material';
import { UserService, userTypes } from '../../core/user.service';

@Component({
  selector: 'nest-profile-edit-dialog',
  templateUrl: './profile-edit-dialog.component.html',
  styleUrls: ['./profile-edit-dialog.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'}]
})
export class ProfileEditDialogComponent implements OnInit {

  form: FormGroup;
  userTypes = userTypes;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // this.userService.getUserByUid(data.uid).subscribe(user => {
    //   this.createForm(user);
    // });
    this.createForm();
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

}
