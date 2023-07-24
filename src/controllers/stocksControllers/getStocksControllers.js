const { getStocksHandlers } = require("../../handlers/stocksHandlers/getStocksHandlers");
const {updateStockHandlers}=require('../../handlers/stocksHandlers/updateStockHandlers')

const getStocksControllers = async (req, res) => {
    try {
        await updateStockHandlers()
        const stocks = await getStocksHandlers();

        return stocks.length > 0
            ? res.status(200).json(stocks)
            : res.status(404).send("Stocks not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getStocksControllers };