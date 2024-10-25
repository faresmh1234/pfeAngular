import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecruttementComponent } from './dashboard-recruttement.component';

describe('DashboardRecruttementComponent', () => {
  let component: DashboardRecruttementComponent;
  let fixture: ComponentFixture<DashboardRecruttementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRecruttementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRecruttementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
