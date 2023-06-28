import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUserFormComponent } from './cat-user-form.component';

describe('CatUserFormComponent', () => {
  let component: CatUserFormComponent;
  let fixture: ComponentFixture<CatUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
