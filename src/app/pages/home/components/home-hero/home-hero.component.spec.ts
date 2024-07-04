import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroComponent } from './home-hero.component';

describe('HomeHeroComponent', () => {
  let component: HomeHeroComponent;
  let fixture: ComponentFixture<HomeHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeroComponent],
    });
    fixture = TestBed.createComponent(HomeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
