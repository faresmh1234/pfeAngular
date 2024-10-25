import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInscriptionMemberComponent } from './add-inscription-member.component';

describe('AddInscriptionMemberComponent', () => {
  let component: AddInscriptionMemberComponent;
  let fixture: ComponentFixture<AddInscriptionMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInscriptionMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInscriptionMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
