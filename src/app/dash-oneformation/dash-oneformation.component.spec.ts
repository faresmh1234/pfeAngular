import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOneformationComponent } from './dash-oneformation.component';

describe('DashOneformationComponent', () => {
  let component: DashOneformationComponent;
  let fixture: ComponentFixture<DashOneformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashOneformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOneformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
