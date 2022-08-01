import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { StocksService } from './stocks.service';

const WAITING_TIME = 300;
@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent {
  stocksInput = new FormControl();
  allStocks$ = this.stocksService.getStocks().pipe(
    tap(() => {
      console.log('Initial Flow');
    })
  );

  filterStocks$ = this.stocksInput.valueChanges.pipe(
    debounceTime(WAITING_TIME),
    tap(() => {
      console.log('Filter Flow');
    }),
    tap(console.log),
    filter((valueInput) => valueInput.length >= 3 || !valueInput.length),
    switchMap((valueInput) => this.stocksService.getStocks(valueInput))
  );

  stocks$ = merge(this.allStocks$, this.filterStocks$);

  constructor(private stocksService: StocksService) {}
}
