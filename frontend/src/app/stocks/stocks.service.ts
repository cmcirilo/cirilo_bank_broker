import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private httpClient: HttpClient) {}

  getStocks() {
    return this.httpClient.get<any>('http://localhost:3000/stocks');
  }
}
