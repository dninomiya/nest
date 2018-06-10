import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'nest-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  unsubscribe() {
    this.authService.unsubscribe();
  }

}
