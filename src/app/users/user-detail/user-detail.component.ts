import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../core/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileEditDialogComponent } from '../profile-edit-dialog/profile-edit-dialog.component';
import { ExperienceEditDialogComponent } from '../experience-edit-dialog/experience-edit-dialog.component';

@Component({
  selector: 'nest-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    userService.getUserByGitHub(route.snapshot.params.id).subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  openProfileEditDialog() {
    const dialogRef = this.dialog.open(ProfileEditDialogComponent, {
      width: '600px',
      data: {
        uid: this.user.uid
      }
    });
  }

  openExperienceEditDialog() {
    const dialogRef = this.dialog.open(ExperienceEditDialogComponent, {
      width: '800px',
      data: {
        uid: this.user.uid
      }
    });
  }

}
