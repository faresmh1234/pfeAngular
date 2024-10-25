import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOneRecrutementComponent } from './dash-one-recrutement.component';

describe('DashOneRecrutementComponent', () => {
  let component: DashOneRecrutementComponent;
  let fixture: ComponentFixture<DashOneRecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashOneRecrutementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOneRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
