const { getStocksID_Handlers } = require("../../handlers/stocksHandlers/getStocksID_Handlers");

const getStocksID_Controllers = async (req, res) => {
    try {
        const { id }  =  req.params;

        const stocks = await getStocksID_Handlers(id);

        return stocks.length > 0
            ? res.status(200).json(stocks)
            : res.status(404).send("Stocks not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getStocksID_Controllers };