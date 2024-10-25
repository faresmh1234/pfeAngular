import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemandeEmploieComponent } from './create-demande-emploie.component';

describe('CreateDemandeEmploieComponent', () => {
  let component: CreateDemandeEmploieComponent;
  let fixture: ComponentFixture<CreateDemandeEmploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDemandeEmploieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDemandeEmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
