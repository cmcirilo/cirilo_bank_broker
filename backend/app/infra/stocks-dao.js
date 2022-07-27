const stocksConverter = (row) => ({
  id: row.stocks_id,
  codigo: row.stocks_codigo,
  descricao: row.stocks_descricao,
  preco: parseFloat((Math.random() * (100 - 1) + 1).toFixed(2)),
});

class stocksDao {
  constructor(db) {
    this._db = db;
  }

  add(codigo, descricao, preco) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
                INSERT INTO stocks (
                    stocks_codigo, 
                    stocks_descricao,
                    stocks_preco
                    ) values (?,?,?)
                `,
        [codigo, descricao, preco],
        function (err) {
          if (err) {
            console.log(err);
            return reject("Can`t add stocks");
          }
          resolve(this.lastID);
        }
      );
    });
  }

  listAll(value) {
    return new Promise((resolve, reject) => {
      this._db.all(
        `
              SELECT 
                    stocks_id,stocks_codigo,stocks_descricao,stocks_preco
                FROM stocks
                WHERE stocks_codigo LIKE $codigo
			UNION 
			  SELECT 
                    stocks_id,stocks_codigo,stocks_descricao,stocks_preco
                FROM stocks
                WHERE stocks_descricao LIKE $codigo
                `,
        { $codigo: `%${value}%` },
        (err, rows) => {
          if (err) {
            console.log("++++ERRO+++");
            console.log(err);
            return reject("Can`t load stocks");
          }
          const stocks = rows.map(stocksConverter);
          return resolve(stocks);
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this._db.get(
        `
              SELECT 
                    stocks_id,stocks_codigo,stocks_descricao,stocks_preco
                FROM stocks
                WHERE stocks_id = ?
                `,
        [id],
        (err, row) => {
          console.log(row);
          if (err) {
            console.log(err);
            return reject("Can`t load stocks");
          }
          return resolve(stocksConverter(row));
        }
      );
    });
  }
}

module.exports = stocksDao;
