import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaedRecruttementComponent } from './dashboaed-recruttement.component';

describe('DashboaedRecruttementComponent', () => {
  let component: DashboaedRecruttementComponent;
  let fixture: ComponentFixture<DashboaedRecruttementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaedRecruttementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboaedRecruttementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
