import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchComponent } from './french.component';

describe('FrenchComponent', () => {
  let component: FrenchComponent;
  let fixture: ComponentFixture<FrenchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrenchComponent]
    });
    fixture = TestBed.createComponent(FrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
