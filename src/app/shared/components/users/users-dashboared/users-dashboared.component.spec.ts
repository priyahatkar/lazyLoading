import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashboaredComponent } from './users-dashboared.component';

describe('UsersDashboaredComponent', () => {
  let component: UsersDashboaredComponent;
  let fixture: ComponentFixture<UsersDashboaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDashboaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
