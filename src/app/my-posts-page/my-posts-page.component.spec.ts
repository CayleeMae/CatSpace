import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFriendsPageComponent } from './my-posts-page.component';

describe('CatFriendsPageComponent', () => {
  let component: CatFriendsPageComponent;
  let fixture: ComponentFixture<CatFriendsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFriendsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFriendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
