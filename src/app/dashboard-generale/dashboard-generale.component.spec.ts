import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeneraleComponent } from './dashboard-generale.component';

describe('DashboardGeneraleComponent', () => {
  let component: DashboardGeneraleComponent;
  let fixture: ComponentFixture<DashboardGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGeneraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
