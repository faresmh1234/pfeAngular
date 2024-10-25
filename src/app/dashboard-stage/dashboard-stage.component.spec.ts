import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStageComponent } from './dashboard-stage.component';

describe('DashboardStageComponent', () => {
  let component: DashboardStageComponent;
  let fixture: ComponentFixture<DashboardStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
