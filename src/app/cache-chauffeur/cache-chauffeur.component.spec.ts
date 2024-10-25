import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheChauffeurComponent } from './cache-chauffeur.component';

describe('CacheChauffeurComponent', () => {
  let component: CacheChauffeurComponent;
  let fixture: ComponentFixture<CacheChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
