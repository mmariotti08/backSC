const { getOrderIdHandler } = require('../../handlers/orderHandlers/getOrderIdHandler');

const getOrderId = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getOrderIdHandler(id)

        response.error
            ? res.status(400).send(response.error)
            : res.json(response);
    } catch (error) {
        return res.status(500).json({error: "Error getting order"})
    };
};

module.exports = { getOrderId };