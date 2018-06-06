import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../core/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileEditDialogComponent } from '../profile-edit-dialog/profile-edit-dialog.component';
import { ExperienceEditDialogComponent } from '../experience-edit-dialog/experience-edit-dialog.component';
import { EducationEditDialogComponent } from '../education-edit-dialog/education-edit-dialog.component';
import { WorksEditDialogComponent } from '../works-edit-dialog/works-edit-dialog.component';
import { Skills } from '../../core/skills.model';
import { AuthService } from '../../core/auth.service';
import { RankDialogComponent } from '../../shared/rank-dialog/rank-dialog.component';
import { SkillEditDialogComponent } from '../skill-edit-dialog/skill-edit-dialog.component';

@Component({
  selector: 'nest-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  privateData: any;
  skills = Skills;
  loginUser$ = this.authService.user$;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    userService.getUserByGitHub(route.snapshot.params.id).subscribe(userData => {
      this.user = userData.publicData;
      this.privateData = userData.privateData;
    });
  }

  ngOnInit() {
  }

  openProfileEditDialog() {
    const dialogRef = this.dialog.open(ProfileEditDialogComponent, {
      width: '600px',
      panelClass: 'nest-panel',
      data: {
        uid: this.user.uid
      }
    });
  }

  openExperienceEditDialog() {
    const dialogRef = this.dialog.open(ExperienceEditDialogComponent, {
      width: '800px',
      panelClass: 'nest-panel',
      data: {
        uid: this.user.uid
      }
    });
  }

  openEducationEditDialog() {
    const dialogRef = this.dialog.open(EducationEditDialogComponent, {
      width: '800px',
      panelClass: 'nest-panel',
      data: {
        uid: this.user.uid
      }
    });
  }

  openWorkEditDialog() {
    const dialogRef = this.dialog.open(WorksEditDialogComponent, {
      width: '800px',
      panelClass: 'nest-panel',
      data: {
        uid: this.user.uid
      }
    });
  }

  openRankDialog(): void {
    const dialogRef = this.dialog.open(RankDialogComponent, {
      width: '600px'
    });
  }

  openSkillEditDialog(): void {
    const dialogRef = this.dialog.open(SkillEditDialogComponent, {
      width: '800px',
      panelClass: 'nest-panel',
      data: {
        uid: this.user.uid
      }
    });
  }

}
