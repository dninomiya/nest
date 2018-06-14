import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEditDialogComponent } from './experience-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ExperienceEditDialogComponent', () => {
  let component: ExperienceEditDialogComponent;
  let fixture: ComponentFixture<ExperienceEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceEditDialogComponent ],
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
    fixture = TestBed.createComponent(ExperienceEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
