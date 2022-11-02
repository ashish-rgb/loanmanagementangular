import { TestBed } from '@angular/core/testing';

import { ApplysService } from './applys.service';

describe('ApplysService', () => {
  let service: ApplysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
