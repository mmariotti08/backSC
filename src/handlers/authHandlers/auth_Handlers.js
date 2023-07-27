const bcrypt = require('bcrypt');
const { User } = require('../../db');
const { transporter } = require('../../mail/mailer');

exports.getUserByMail = async (mail) => {
    return await User.findOne({ where: { mail } });
};

exports.checkPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

exports.createUser = async ({ name, last_name, mail, picture }) => {
    const password = await bcrypt.hash('defaultPassword', 10);
    try {
        await transporter.sendMail({
            from: 'shopconnecthenry@gmail.com',
            to: mail,
            subject: 'Welcome to ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
            html: `<h1>Welcome ${name},</h1><h2>Thank you for signing up for ShopConnect.</h2><a href="https://shopconnectt.onrender.com/">GO STORE</a>`
          });
          return await User.create({ 
            name, 
            last_name, 
            mail, 
            password,
            picture,
            administrator: false, 
            active: true,
        });
      } catch (error) {
        
        console.error('Error sending Mail', error);
        return { message: 'new user registered successfully, but failed to send registration email' };
      }
};
