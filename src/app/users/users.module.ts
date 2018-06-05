import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileEditDialogComponent } from './profile-edit-dialog/profile-edit-dialog.component';
import { EducationEditDialogComponent } from './education-edit-dialog/education-edit-dialog.component';
import { ExperienceEditDialogComponent } from './experience-edit-dialog/experience-edit-dialog.component';
import { WorksEditDialogComponent } from './works-edit-dialog/works-edit-dialog.component';
import { SkillEditDialogComponent } from './skill-edit-dialog/skill-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    ProfileEditDialogComponent,
    EducationEditDialogComponent,
    ExperienceEditDialogComponent,
    WorksEditDialogComponent,
    SkillEditDialogComponent,
  ],
  entryComponents: [
    ProfileEditDialogComponent,
    EducationEditDialogComponent,
    ExperienceEditDialogComponent,
    WorksEditDialogComponent,
    SkillEditDialogComponent,
  ]
})
export class UsersModule { }
