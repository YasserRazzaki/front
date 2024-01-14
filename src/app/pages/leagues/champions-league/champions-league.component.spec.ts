import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsLeagueComponent } from './champions-league.component';

describe('ChampionsLeagueComponent', () => {
  let component: ChampionsLeagueComponent;
  let fixture: ComponentFixture<ChampionsLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionsLeagueComponent]
    });
    fixture = TestBed.createComponent(ChampionsLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
