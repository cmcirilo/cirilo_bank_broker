const { stocksDao } = require('../infra');

const api = {};

api.add = async (req, res) => {
	const { code, description, price } = req.body;
	console.log(req.body);
	const stocksDao = new stocksDao(req.db);

	const stocksid = await stocksDao.add(code, description, price);
	const stocks = await stocksDao.findById(stocksid);
	console.log(`Stock added`, stocks);
	res.json(stocks);
};

api.list = async (req, res) => {
	let { valor } = req.query;
	valor = valor || '';
	console.log(`Find Stock by ${valor}`);
	const stocks = await new stocksDao(req.db).listAll(valor);
	const result = { payload: stocks };
	res.json(result);
};

api.findById = async (req, res) => {
	const { stocksID } = req.params;
	console.log('####################################');
	console.log(`Finding stocks by ID ${stocksID}`);
	const stocks = await new stocksDao(req.db).findById(stocksID);
	if (stocks) {
		res.json(stocks);
	} else {
		res.status(404).json({ message: 'stocks does not exist' });
	}
};

module.exports = api;
