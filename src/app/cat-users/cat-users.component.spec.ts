import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUsersComponent } from './cat-users.component';

describe('CatUsersComponent', () => {
  let component: CatUsersComponent;
  let fixture: ComponentFixture<CatUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
