import { TestBed } from '@angular/core/testing';

import { MembreInscriptionService } from './membre-inscription.service';

describe('MembreInscriptionService', () => {
  let service: MembreInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
