import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlayerComponent } from './live-player.component';

describe('LivePlayerComponent', () => {
  let component: LivePlayerComponent;
  let fixture: ComponentFixture<LivePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
