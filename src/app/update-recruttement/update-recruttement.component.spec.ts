import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecruttementComponent } from './update-recruttement.component';

describe('UpdateRecruttementComponent', () => {
  let component: UpdateRecruttementComponent;
  let fixture: ComponentFixture<UpdateRecruttementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecruttementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecruttementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
