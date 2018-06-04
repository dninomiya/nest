import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../core/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nest-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    userService.getUser(route.snapshot.params.id).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

}
