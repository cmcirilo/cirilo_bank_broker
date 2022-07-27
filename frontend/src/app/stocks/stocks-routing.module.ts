import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { stocksComponent } from './stocks.component';

export const routes: Routes = [
  {
    path: '',
    component: stocksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocksRoutingModule {}
