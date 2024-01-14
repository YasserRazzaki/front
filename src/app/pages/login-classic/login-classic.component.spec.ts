import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginClassicComponent } from './login-classic.component';

describe('LoginClassicComponent', () => {
  let component: LoginClassicComponent;
  let fixture: ComponentFixture<LoginClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginClassicComponent]
    });
    fixture = TestBed.createComponent(LoginClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
