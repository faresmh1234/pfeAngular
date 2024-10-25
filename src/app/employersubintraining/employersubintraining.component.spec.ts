import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersubintrainingComponent } from './employersubintraining.component';

describe('EmployersubintrainingComponent', () => {
  let component: EmployersubintrainingComponent;
  let fixture: ComponentFixture<EmployersubintrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersubintrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployersubintrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
