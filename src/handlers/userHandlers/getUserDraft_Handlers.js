const { User } = require('../../db');

const getUserDraft_Handlers = async () => {
    try {
        const users = await User.findAll({
            where: { active: false }
        });

        return users;
    } catch (error) {
        return error.message;
    };
};

module.exports = { getUserDraft_Handlers };