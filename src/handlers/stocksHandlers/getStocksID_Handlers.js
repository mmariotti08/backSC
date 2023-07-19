const { Stock } = require('../../db');
const { Op } = require('sequelize');

const getStocksID_Handlers = async (id) => {
    try {
        const stocks = await Stock.findAll({
            where: {
                productId: id,
                // quantity: {
                //     [Op.gt]: 0
                // }
            }
        });

        if (stocks.length > 0) return stocks;
        else return {error: `Stocks not found`};
    } catch (error) {
        return error.message;
    };
};

module.exports = { getStocksID_Handlers };