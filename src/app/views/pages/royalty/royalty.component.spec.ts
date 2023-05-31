import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaltyComponent } from './royalty.component';

describe('RoyaltyComponent', () => {
  let component: RoyaltyComponent;
  let fixture: ComponentFixture<RoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
