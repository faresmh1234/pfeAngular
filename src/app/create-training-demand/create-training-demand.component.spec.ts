import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingDemandComponent } from './create-training-demand.component';

describe('CreateTrainingDemandComponent', () => {
  let component: CreateTrainingDemandComponent;
  let fixture: ComponentFixture<CreateTrainingDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
