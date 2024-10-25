import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCondidatComponent } from './create-condidat.component';

describe('CreateCondidatComponent', () => {
  let component: CreateCondidatComponent;
  let fixture: ComponentFixture<CreateCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCondidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
