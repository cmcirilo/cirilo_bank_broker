import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Stocks } from './model/stocks';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class stocksComponent implements OnInit {
  stocksInput = new FormControl();
  stocks: Stocks;

  constructor(private StocksService: StocksService) {}

  ngOnInit(): void {
    this.StocksService.getStocks().subscribe((response) => {
      this.stocks = response.payload;
    });
  }
}
