import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgressComponent } from './home-progress.component';

describe('HomeProgressComponent', () => {
  let component: HomeProgressComponent;
  let fixture: ComponentFixture<HomeProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProgressComponent]
    });
    fixture = TestBed.createComponent(HomeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
