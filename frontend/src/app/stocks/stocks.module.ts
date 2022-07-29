import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CardstocksComponent } from './card-stocks/card-stocks.component';
import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';

@NgModule({
  declarations: [StocksComponent, CardstocksComponent],
  imports: [CommonModule, StocksRoutingModule, SharedModule],
})
export class StocksModule {}
