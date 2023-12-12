import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerReviewsComponent } from './home-customer-reviews.component';

describe('HomeCustomerReviewsComponent', () => {
  let component: HomeCustomerReviewsComponent;
  let fixture: ComponentFixture<HomeCustomerReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCustomerReviewsComponent]
    });
    fixture = TestBed.createComponent(HomeCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
