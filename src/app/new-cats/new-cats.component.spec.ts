import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCatsComponent } from './new-cats.component';

describe('NewCatsComponent', () => {
  let component: NewCatsComponent;
  let fixture: ComponentFixture<NewCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
