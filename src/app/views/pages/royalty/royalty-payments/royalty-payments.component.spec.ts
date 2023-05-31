import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaltyPaymentsComponent } from './royalty-payments.component';

describe('RoyaltyPaymentsComponent', () => {
  let component: RoyaltyPaymentsComponent;
  let fixture: ComponentFixture<RoyaltyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaltyPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaltyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
