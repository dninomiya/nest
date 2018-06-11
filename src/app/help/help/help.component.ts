import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'nest-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  unsubscribe() {
    this.authService.deleteUser().subscribe(_ => {
      this.isLoggedIn = false;
      this.snackBar.open('退会しました。', null, {
        duration: 2000,
      });
    });
  }

}
