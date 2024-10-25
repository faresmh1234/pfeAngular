import { TestBed } from '@angular/core/testing';

import { VisiteMedicalService } from './visite-medical.service';

describe('VisiteMedicalService', () => {
  let service: VisiteMedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteMedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
