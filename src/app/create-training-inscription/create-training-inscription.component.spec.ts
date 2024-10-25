import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingInscriptionComponent } from './create-training-inscription.component';

describe('CreateTrainingInscriptionComponent', () => {
  let component: CreateTrainingInscriptionComponent;
  let fixture: ComponentFixture<CreateTrainingInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
