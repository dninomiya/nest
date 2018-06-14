import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { CoreModule } from './core.module';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [
        CoreModule
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
