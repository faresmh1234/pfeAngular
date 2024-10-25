import { TestBed } from '@angular/core/testing';

import { DemandeEmploieService } from './demande-emploie.service';

describe('DemandeEmploieService', () => {
  let service: DemandeEmploieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeEmploieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
