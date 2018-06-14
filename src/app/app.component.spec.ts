import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NestNavComponent } from './nest-nav/nest-nav.component';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent,
        NestNavComponent
      ],
    }).compileComponents();
  }));
});
