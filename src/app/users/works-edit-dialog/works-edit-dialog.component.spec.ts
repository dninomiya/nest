import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksEditDialogComponent } from './works-edit-dialog.component';

describe('WorksEditDialogComponent', () => {
  let component: WorksEditDialogComponent;
  let fixture: ComponentFixture<WorksEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
