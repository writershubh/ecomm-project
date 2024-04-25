import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAuthComponent } from './seller-auth.component';
import { HttpClient } from '@angular/common/http';

describe('SellerAuthComponent', () => {
  let component: SellerAuthComponent;
  let fixture: ComponentFixture<SellerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerAuthComponent],
      providers: [HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SellerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
