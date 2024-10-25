import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCacheChauffeurComponent } from './detail-cache-chauffeur.component';

describe('DetailCacheChauffeurComponent', () => {
  let component: DetailCacheChauffeurComponent;
  let fixture: ComponentFixture<DetailCacheChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCacheChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCacheChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
