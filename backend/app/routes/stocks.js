const { stocksAPI } = require("../api");

const { wrapAsync, auth } = require("../infra");

module.exports = (app) => {
  app
    .route("/stocks")
    .get(wrapAsync(stocksAPI.list))
    .post(auth, wrapAsync(stocksAPI.add));

  app.route("/stocks/:stocksID").get(wrapAsync(stocksAPI.findById));
};
