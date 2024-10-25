import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOneStageComponent } from './dash-one-stage.component';

describe('DashOneStageComponent', () => {
  let component: DashOneStageComponent;
  let fixture: ComponentFixture<DashOneStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashOneStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOneStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
