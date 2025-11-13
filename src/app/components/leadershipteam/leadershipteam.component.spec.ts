import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipteamComponent } from './leadershipteam.component';

describe('LeadershipteamComponent', () => {
  let component: LeadershipteamComponent;
  let fixture: ComponentFixture<LeadershipteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
