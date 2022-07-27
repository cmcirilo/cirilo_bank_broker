import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'stocks',
        loadChildren: () =>
          import('../stocks/stocks.module').then((m) => m.StocksModule),
      },
      {
        path: '',
        redirectTo: 'stocks',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'stocks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
