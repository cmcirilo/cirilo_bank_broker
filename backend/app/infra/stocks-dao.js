const stocksConverter = (row) => ({
	id: row.stocks_id,
	code: row.stocks_code,
	description: row.stocks_description,
	price: parseFloat((Math.random() * (100 - 1) + 1).toFixed(2)),
});

class stocksDao {
	constructor(db) {
		this._db = db;
	}

	add(code, description, price) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`
                INSERT INTO stocks (
                    stocks_code, 
                    stocks_description,
                    stocks_price
                    ) values (?,?,?)
                `,
				[code, description, price],
				function (err) {
					if (err) {
						console.log(err);
						return reject('Can`t add stocks');
					}
					resolve(this.lastID);
				},
			);
		});
	}

	listAll(value) {
		return new Promise((resolve, reject) => {
			this._db.all(
				`
              SELECT 
                    stocks_id,stocks_code,stocks_description,stocks_price
                FROM stocks
                WHERE stocks_code LIKE $code
			UNION 
			  SELECT 
                    stocks_id,stocks_code,stocks_description,stocks_price
                FROM stocks
                WHERE stocks_description LIKE $code
                `,
				{ $code: `%${value}%` },
				(err, rows) => {
					if (err) {
						console.log('++++ERRO+++');
						console.log(err);
						return reject('Can`t load stocks');
					}
					const stocks = rows.map(stocksConverter);
					return resolve(stocks);
				},
			);
		});
	}

	findById(id) {
		return new Promise((resolve, reject) => {
			this._db.get(
				`
              SELECT 
                    stocks_id,stocks_code,stocks_description,stocks_price
                FROM stocks
                WHERE stocks_id = ?
                `,
				[id],
				(err, row) => {
					console.log(row);
					if (err) {
						console.log(err);
						return reject('Can`t load stocks');
					}
					return resolve(stocksConverter(row));
				},
			);
		});
	}
}

module.exports = stocksDao;
