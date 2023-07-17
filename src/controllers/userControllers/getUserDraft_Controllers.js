const { getUserDraft_Handlers } = require("../../handlers/userHandlers/getUserDraft_Handlers");

const getUserDraft_Controllers = async (req, res) => {
    try {
        const users = await getUserDraft_Handlers();

        users.error
            ? res.status(400).json(users.error)
            : res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getUserDraft_Controllers };