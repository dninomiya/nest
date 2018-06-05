import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileEditDialogComponent } from './profile-edit-dialog/profile-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [UsersComponent, UserDetailComponent, ProfileEditDialogComponent],
  entryComponents: [
    ProfileEditDialogComponent
  ]
})
export class UsersModule { }
