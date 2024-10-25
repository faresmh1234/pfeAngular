import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTrainingComponent } from './department-training.component';

describe('DepartmentTrainingComponent', () => {
  let component: DepartmentTrainingComponent;
  let fixture: ComponentFixture<DepartmentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
