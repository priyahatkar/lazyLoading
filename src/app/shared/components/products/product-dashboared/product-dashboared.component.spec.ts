import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboaredComponent } from './product-dashboared.component';

describe('ProductDashboaredComponent', () => {
  let component: ProductDashboaredComponent;
  let fixture: ComponentFixture<ProductDashboaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashboaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
