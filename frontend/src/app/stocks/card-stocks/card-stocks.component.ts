import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-stocks',
  templateUrl: './card-stocks.component.html',
  styleUrls: ['./card-stocks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardstocksComponent implements OnInit {
  @Input() acao: any;

  constructor() {}

  ngOnInit(): void {}
}
