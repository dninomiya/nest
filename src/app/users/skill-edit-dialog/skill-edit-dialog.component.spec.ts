import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditDialogComponent } from './skill-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('SkillEditDialogComponent', () => {
  let component: SkillEditDialogComponent;
  let fixture: ComponentFixture<SkillEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillEditDialogComponent ],
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
    fixture = TestBed.createComponent(SkillEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
