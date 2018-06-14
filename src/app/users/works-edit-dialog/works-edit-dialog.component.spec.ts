import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksEditDialogComponent } from './works-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('WorksEditDialogComponent', () => {
  let component: WorksEditDialogComponent;
  let fixture: ComponentFixture<WorksEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksEditDialogComponent ],
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
    fixture = TestBed.createComponent(WorksEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
