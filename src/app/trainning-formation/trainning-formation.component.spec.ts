import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainningFormationComponent } from './trainning-formation.component';

describe('TrainningFormationComponent', () => {
  let component: TrainningFormationComponent;
  let fixture: ComponentFixture<TrainningFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainningFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainningFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
