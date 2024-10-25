import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashformationComponent } from './dashformation.component';

describe('DashformationComponent', () => {
  let component: DashformationComponent;
  let fixture: ComponentFixture<DashformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
