
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestNavComponent } from './nest-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NestNavComponent', () => {
  let component: NestNavComponent;
  let fixture: ComponentFixture<NestNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NestNavComponent ],
      imports: [
        SharedModule,
        RouterTestingModule,
        CoreModule,
        BrowserAnimationsModule
      ]
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
