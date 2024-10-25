import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTraningComponent } from './detail-traning.component';

describe('DetailTraningComponent', () => {
  let component: DetailTraningComponent;
  let fixture: ComponentFixture<DetailTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTraningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
