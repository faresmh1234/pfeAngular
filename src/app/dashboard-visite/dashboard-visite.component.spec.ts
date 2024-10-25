import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVisiteComponent } from './dashboard-visite.component';

describe('DashboardVisiteComponent', () => {
  let component: DashboardVisiteComponent;
  let fixture: ComponentFixture<DashboardVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
