import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressComponent } from './adress.component';

describe('AdressComponent', () => {
  let component: AdressComponent;
  let fixture: ComponentFixture<AdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
