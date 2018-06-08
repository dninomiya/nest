import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      userName: [null, Validators.required]
    });
  }

  signIn() {
    this.authService.signIn();
  }

  resetUser() {
    this.userService.registerUser(this.authService.afUser);
  }

  // validateEmailNotTaken(control: AbstractControl) {
  //   return this.userService.checkUserNotTaken(control.value).map(res => {
  //     return res ? null : { emailTaken: true };
  //   });
  // }

}
