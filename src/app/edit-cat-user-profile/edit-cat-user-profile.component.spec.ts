import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatUserProfileComponent } from './edit-cat-user-profile.component';

describe('EditCatUserProfileComponent', () => {
  let component: EditCatUserProfileComponent;
  let fixture: ComponentFixture<EditCatUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCatUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCatUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
