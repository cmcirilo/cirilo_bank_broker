export interface Stocks extends Array<Stock> {}

export interface Stock {
  id: number;
  code: string;
  description: string;
  price: number;
}

export interface StocksAPI {
  payload: Stocks;
}
