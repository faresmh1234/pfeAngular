import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruttementComponent } from './recruttement.component';

describe('RecruttementComponent', () => {
  let component: RecruttementComponent;
  let fixture: ComponentFixture<RecruttementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruttementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruttementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
