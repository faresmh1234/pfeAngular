import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisiteMedicaleComponent } from './create-visite-medicale.component';

describe('CreateVisiteMedicaleComponent', () => {
  let component: CreateVisiteMedicaleComponent;
  let fixture: ComponentFixture<CreateVisiteMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVisiteMedicaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVisiteMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
