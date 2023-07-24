const { User } = require('../../db');
const bcrypt = require('bcrypt');

const accessAdmin_Handlers = async (mail, password) => {
    try {
        const admin = await User.findOne({
            where: {
                mail,
                administrator: true,
                active: true
            }
        });

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        return isPasswordValid
            ? { access: true, message: 'The admin was found.' }
            : { access: false, message: 'The admin was not found.' };
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = { accessAdmin_Handlers };