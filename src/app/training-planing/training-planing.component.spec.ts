import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlaningComponent } from './training-planing.component';

describe('TrainingPlaningComponent', () => {
  let component: TrainingPlaningComponent;
  let fixture: ComponentFixture<TrainingPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPlaningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
