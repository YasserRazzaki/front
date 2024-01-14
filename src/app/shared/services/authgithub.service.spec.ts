import { TestBed } from '@angular/core/testing';

import { AuthgithubService } from './authgithub.service';

describe('AuthgithubService', () => {
  let service: AuthgithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
