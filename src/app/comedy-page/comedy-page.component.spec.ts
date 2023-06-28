import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyPageComponent } from './comedy-page.component';

describe('ComedyPageComponent', () => {
  let component: ComedyPageComponent;
  let fixture: ComponentFixture<ComedyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComedyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComedyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
