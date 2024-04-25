import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddProductComponent } from './seller-add-product.component';
import { HttpClient } from '@angular/common/http';

describe('SellerAddProductComponent', () => {
  let component: SellerAddProductComponent;
  let fixture: ComponentFixture<SellerAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerAddProductComponent],
      providers: [HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SellerAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
