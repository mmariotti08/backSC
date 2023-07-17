const { accessAdmin_Handlers } = require('../../handlers/userHandlers/accessAdmin_Handlers');

const accessAdmin_Controllers = async (req, res) => {
    try {
        const { mail, password } = req.body;

        const response = await accessAdmin_Handlers(mail, password);

        response.error
            ? res.status(400).send(response.error)
            : res.status(200).json(response);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { accessAdmin_Controllers };