import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent {
  stocksInput = new FormControl();
  stocks$ = this.stocksService.getStocks();

  constructor(private stocksService: StocksService) {}
}
