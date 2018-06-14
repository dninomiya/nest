
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestDashboardComponent } from './nest-dashboard.component';
import { SharedModule } from '../../shared/shared.module';

describe('NestDashboardComponent', () => {
  let component: NestDashboardComponent;
  let fixture: ComponentFixture<NestDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestDashboardComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
