const { getProductsDraft_Handlers } = require("../handlers/getProductDraft_Handlers");

const getProductDraft_Controllers = async (req, res) => {
    try {
        const product = await getProductsDraft_Handlers();

        product.error
            ? res.status(400).json(product.error)
            : res.status(200).json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getProductDraft_Controllers };