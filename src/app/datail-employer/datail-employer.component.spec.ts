import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailEmployerComponent } from './datail-employer.component';

describe('DatailEmployerComponent', () => {
  let component: DatailEmployerComponent;
  let fixture: ComponentFixture<DatailEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
