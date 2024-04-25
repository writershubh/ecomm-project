import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthComponent } from './user-auth.component';
import { HttpClient } from '@angular/common/http';

describe('UserAuthComponent', () => {
  let component: UserAuthComponent;
  let fixture: ComponentFixture<UserAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAuthComponent],
      providers: [HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
