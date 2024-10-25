import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCacheChauffeurComponent } from './create-cache-chauffeur.component';

describe('CreateCacheChauffeurComponent', () => {
  let component: CreateCacheChauffeurComponent;
  let fixture: ComponentFixture<CreateCacheChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCacheChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCacheChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
