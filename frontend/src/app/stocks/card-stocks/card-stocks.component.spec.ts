import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstocksComponent } from './card-stocks.component';

describe('StockCardComponent', () => {
  let component: CardstocksComponent;
  let fixture: ComponentFixture<CardstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
