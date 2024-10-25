import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdecisionComponent } from './chartdecision.component';

describe('ChartdecisionComponent', () => {
  let component: ChartdecisionComponent;
  let fixture: ComponentFixture<ChartdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
