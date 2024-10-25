import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieremployeComponent } from './modifieremploye.component';

describe('ModifieremployeComponent', () => {
  let component: ModifieremployeComponent;
  let fixture: ComponentFixture<ModifieremployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieremployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifieremployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
