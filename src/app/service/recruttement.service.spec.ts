import { TestBed } from '@angular/core/testing';

import { RecruttementService } from './recruttement.service';

describe('RecruttementService', () => {
  let service: RecruttementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruttementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
