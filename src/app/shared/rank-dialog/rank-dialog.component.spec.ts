import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankDialogComponent } from './rank-dialog.component';
import { SharedModule } from '../shared.module';

describe('RankDialogComponent', () => {
  let component: RankDialogComponent;
  let fixture: ComponentFixture<RankDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
