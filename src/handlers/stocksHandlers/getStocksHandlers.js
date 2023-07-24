const { Stock } = require('../../db');

const getStocksHandlers = async () => {
    try {

        const stocks = await Stock.findAll(
            {
                order: [['id', 'ASC']]
            }
        );
        
        if (stocks.length > 0) return stocks;
        else return {error: `Stocks not found`};
    } catch (error) {
        return error.message;
    };
};

module.exports = { getStocksHandlers };