import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgentsComponent } from './home-agents.component';

describe('HomeAgentsComponent', () => {
  let component: HomeAgentsComponent;
  let fixture: ComponentFixture<HomeAgentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAgentsComponent]
    });
    fixture = TestBed.createComponent(HomeAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
