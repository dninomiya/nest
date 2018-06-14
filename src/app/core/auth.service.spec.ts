import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { CoreModule } from './core.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        CoreModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
