import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { stocksComponent } from './stocks.component';

describe('StockComponent', () => {
  let component: stocksComponent;
  let fixture: ComponentFixture<stocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ stocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(stocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
