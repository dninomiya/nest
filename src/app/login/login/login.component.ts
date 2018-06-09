import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../core/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'nest-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  devmode = !environment.production;

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

  addDummyUser() {
    this.userService.addDummyUser();
  }

}
