import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandeEmploieComponent } from './update-demande-emploie.component';

describe('UpdateDemandeEmploieComponent', () => {
  let component: UpdateDemandeEmploieComponent;
  let fixture: ComponentFixture<UpdateDemandeEmploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDemandeEmploieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDemandeEmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
