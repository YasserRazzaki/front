import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishComponent } from './spanish.component';

describe('SpanishComponent', () => {
  let component: SpanishComponent;
  let fixture: ComponentFixture<SpanishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanishComponent]
    });
    fixture = TestBed.createComponent(SpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
