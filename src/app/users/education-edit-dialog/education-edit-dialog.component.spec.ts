import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditDialogComponent } from './education-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('EducationEditDialogComponent', () => {
  let component: EducationEditDialogComponent;
  let fixture: ComponentFixture<EducationEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationEditDialogComponent ],
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
    fixture = TestBed.createComponent(EducationEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
