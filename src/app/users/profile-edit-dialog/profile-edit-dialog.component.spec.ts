import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditDialogComponent } from './profile-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ProfileEditDialogComponent', () => {
  let component: ProfileEditDialogComponent;
  let fixture: ComponentFixture<ProfileEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditDialogComponent ],
      imports: [
        SharedModule,
        CoreModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
