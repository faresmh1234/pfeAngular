import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisiteMedicaleComponent } from './update-visite-medicale.component';

describe('UpdateVisiteMedicaleComponent', () => {
  let component: UpdateVisiteMedicaleComponent;
  let fixture: ComponentFixture<UpdateVisiteMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisiteMedicaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVisiteMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
