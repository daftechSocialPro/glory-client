import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCitesComponent } from './home-cites.component';

describe('HomeCitesComponent', () => {
  let component: HomeCitesComponent;
  let fixture: ComponentFixture<HomeCitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCitesComponent]
    });
    fixture = TestBed.createComponent(HomeCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
