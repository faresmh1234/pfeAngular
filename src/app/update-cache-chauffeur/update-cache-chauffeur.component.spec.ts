import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCacheChauffeurComponent } from './update-cache-chauffeur.component';

describe('UpdateCacheChauffeurComponent', () => {
  let component: UpdateCacheChauffeurComponent;
  let fixture: ComponentFixture<UpdateCacheChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCacheChauffeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCacheChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
