const { Stock } = require('../../db');

const getStocksHandlers = async () => {
    try {

        const stocks = await Stock.findAll();
        
        if (stocks.length > 0) return stocks;
        else return {error: `Stocks not found`};
    } catch (error) {
        return error.message;
    };
};

module.exports = { getStocksHandlers };