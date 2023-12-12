import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestPropertyComponent } from './home-latest-property.component';

describe('HomeLatestPropertyComponent', () => {
  let component: HomeLatestPropertyComponent;
  let fixture: ComponentFixture<HomeLatestPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLatestPropertyComponent]
    });
    fixture = TestBed.createComponent(HomeLatestPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
