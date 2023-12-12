import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiDetailComponent } from './properti-detail.component';

describe('PropertiDetailComponent', () => {
  let component: PropertiDetailComponent;
  let fixture: ComponentFixture<PropertiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiDetailComponent]
    });
    fixture = TestBed.createComponent(PropertiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
