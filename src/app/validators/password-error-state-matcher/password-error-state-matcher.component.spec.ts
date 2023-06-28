import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordErrorStateMatcherComponent } from './password-error-state-matcher.component';

describe('PasswordErrorStateMatcherComponent', () => {
  let component: PasswordErrorStateMatcherComponent;
  let fixture: ComponentFixture<PasswordErrorStateMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordErrorStateMatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
