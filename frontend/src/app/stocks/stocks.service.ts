import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Stock, StocksAPI } from './model/stocks';
@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private httpClient: HttpClient) {}

  getStocks(value?: string) {
    const params = value ? new HttpParams().append('value', value) : undefined;
    return this.httpClient
      .get<StocksAPI>('http://localhost:3000/stocks', { params })
      .pipe(
        tap((response) => console.log(response)),
        pluck('payload'),
        map((stocks) =>
          stocks.sort((stockA, stockB) => this.sortByCode(stockA, stockB))
        )
      );
  }

  private sortByCode(stockA: Stock, stockB: Stock) {
    if (stockA.code > stockB.code) {
      return 1;
    }

    if (stockA.code < stockB.code) {
      return -1;
    }

    return 0;
  }
}
