import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditDialogComponent } from './education-edit-dialog.component';

describe('EducationEditDialogComponent', () => {
  let component: EducationEditDialogComponent;
  let fixture: ComponentFixture<EducationEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationEditDialogComponent ]
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
