import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizjoueurComponent } from './quizjoueur.component';

describe('QuizjoueurComponent', () => {
  let component: QuizjoueurComponent;
  let fixture: ComponentFixture<QuizjoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizjoueurComponent]
    });
    fixture = TestBed.createComponent(QuizjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
