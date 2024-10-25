import { TestBed } from '@angular/core/testing';

import { CachechauffeurService } from './cachechauffeur.service';

describe('CachechauffeurService', () => {
  let service: CachechauffeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachechauffeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
