import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewtrainingComponent } from './createnewtraining.component';

describe('CreatenewtrainingComponent', () => {
  let component: CreatenewtrainingComponent;
  let fixture: ComponentFixture<CreatenewtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewtrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
