const { User } = require('../../db');

const accessAdmin_Handlers = async (mail, password) => {
    try {
        const admin = await User.findOne({
            where: {
                mail,
                password,
                administrator: true,
                active: true
            }
        });

        return admin
            ? { access: true, message: 'The admin was found.' }
            : { access: false, message: 'The admin was not found.' };
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = { accessAdmin_Handlers };