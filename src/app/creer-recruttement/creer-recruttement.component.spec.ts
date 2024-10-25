import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerRecruttementComponent } from './creer-recruttement.component';

describe('CreerRecruttementComponent', () => {
  let component: CreerRecruttementComponent;
  let fixture: ComponentFixture<CreerRecruttementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerRecruttementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerRecruttementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
