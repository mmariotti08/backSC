const bcrypt = require('bcrypt');
const { User } = require('../../db');

exports.getUserByMail = async (mail) => {
    return await User.findOne({ where: { mail } });
};

exports.checkPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

exports.createUser = async ({ name, last_name, mail, picture }) => {
    const password = await bcrypt.hash('defaultPassword', 10);

    return await User.create({ 
        name, 
        last_name, 
        mail, 
        password,
        picture,
        administrator: false, 
        active: true,
    });
};
