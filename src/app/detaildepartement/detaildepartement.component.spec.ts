import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildepartementComponent } from './detaildepartement.component';

describe('DetaildepartementComponent', () => {
  let component: DetaildepartementComponent;
  let fixture: ComponentFixture<DetaildepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaildepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
