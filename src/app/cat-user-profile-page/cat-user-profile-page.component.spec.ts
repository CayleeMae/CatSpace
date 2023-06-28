import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUserProfilePageComponent } from './cat-user-profile-page.component';

describe('CatUserProfilePageComponent', () => {
  let component: CatUserProfilePageComponent;
  let fixture: ComponentFixture<CatUserProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUserProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatUserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
