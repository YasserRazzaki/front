import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchesComponent } from './football-matches.component';

describe('FootballMatchesComponent', () => {
  let component: FootballMatchesComponent;
  let fixture: ComponentFixture<FootballMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballMatchesComponent]
    });
    fixture = TestBed.createComponent(FootballMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
