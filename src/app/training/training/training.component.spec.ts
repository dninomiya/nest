import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { SharedModule } from '../../shared/shared.module';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
