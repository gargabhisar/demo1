import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksalesComponent } from './booksales.component';

describe('BooksalesComponent', () => {
  let component: BooksalesComponent;
  let fixture: ComponentFixture<BooksalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
