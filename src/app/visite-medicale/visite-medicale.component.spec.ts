import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteMedicaleComponent } from './visite-medicale.component';

describe('VisiteMedicaleComponent', () => {
  let component: VisiteMedicaleComponent;
  let fixture: ComponentFixture<VisiteMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteMedicaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
