import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopAreasComponent } from './home-top-areas.component';

describe('HomeTopAreasComponent', () => {
  let component: HomeTopAreasComponent;
  let fixture: ComponentFixture<HomeTopAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopAreasComponent]
    });
    fixture = TestBed.createComponent(HomeTopAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
