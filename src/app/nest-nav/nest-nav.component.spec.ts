
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestNavComponent } from './nest-nav.component';

describe('NestNavComponent', () => {
  let component: NestNavComponent;
  let fixture: ComponentFixture<NestNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
