interface PortFolio {
  portfolio_id: string;
  portfolio_descricao: string;
  user_id: number;
  items: Array<PortFolioItem>;
}

interface PortFolioItem {
  item_quantidade: number;
  item_preco: number;
  stocks_id: number;
}
