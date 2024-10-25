import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandMemberComponent } from './add-demand-member.component';

describe('AddDemandMemberComponent', () => {
  let component: AddDemandMemberComponent;
  let fixture: ComponentFixture<AddDemandMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemandMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
