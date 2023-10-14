import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InActivatedUsersComponent } from './in-activated-users.component';

describe('InActivatedUsersComponent', () => {
  let component: InActivatedUsersComponent;
  let fixture: ComponentFixture<InActivatedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InActivatedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InActivatedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
