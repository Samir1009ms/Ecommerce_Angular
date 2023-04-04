import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagShopComponent } from './bag-shop.component';

describe('BagShopComponent', () => {
  let component: BagShopComponent;
  let fixture: ComponentFixture<BagShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
