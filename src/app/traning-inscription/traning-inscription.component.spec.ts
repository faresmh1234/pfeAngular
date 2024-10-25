import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningInscriptionComponent } from './traning-inscription.component';

describe('TraningInscriptionComponent', () => {
  let component: TraningInscriptionComponent;
  let fixture: ComponentFixture<TraningInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraningInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraningInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
