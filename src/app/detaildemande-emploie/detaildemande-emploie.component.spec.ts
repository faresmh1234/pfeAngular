import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildemandeEmploieComponent } from './detaildemande-emploie.component';

describe('DetaildemandeEmploieComponent', () => {
  let component: DetaildemandeEmploieComponent;
  let fixture: ComponentFixture<DetaildemandeEmploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildemandeEmploieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaildemandeEmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
