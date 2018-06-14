import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        SharedModule,
        RouterTestingModule,
        CoreModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
