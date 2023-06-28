import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailErrorStateMatcher} from './email-error-state-matcher';

describe('EmailErrorStateMatcher', () => {
  let component: EmailErrorStateMatcher;
  let fixture: ComponentFixture<EmailErrorStateMatcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailErrorStateMatcher ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailErrorStateMatcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
