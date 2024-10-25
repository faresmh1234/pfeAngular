import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePresenceComponent } from './create-presence.component';

describe('CreatePresenceComponent', () => {
  let component: CreatePresenceComponent;
  let fixture: ComponentFixture<CreatePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePresenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
