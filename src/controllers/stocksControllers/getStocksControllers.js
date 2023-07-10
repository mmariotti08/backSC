const { getStocksHandlers } = require("../../handlers/stocksHandlers/getStocksHandlers");

const getStocksControllers = async (req, res) => {
    try {
        const stocks = await getStocksHandlers();

        return stocks.length > 0
            ? res.status(200).json(stocks)
            : res.status(404).send("Stocks not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getStocksControllers };