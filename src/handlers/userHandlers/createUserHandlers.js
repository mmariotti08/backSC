const { User } = require('../../db');
const { transporter } = require('../../mail/mailer');


const createUserHandlers = async ({ name, mail, password, phone, last_name, address }) => {
  try {
    const [user, create] = await User.findOrCreate({
      where: { mail },
      defaults: { name, password, last_name, phone, address }
    });

    if (create) {
      const userData = {
        id: user.id,
        name: user.name,
        last_name: user.name,
        mail: user.mail,
        phone: user.phone
      };
      
      const registrationMail = {
        from: 'shopconnecthenry@gmail.com',
        to: mail,
        subject: 'Welcome to ShopConnect :)',
        html: `<p>Welcome ${name},</p><p>Thank you for signing up for ShopConnect.</p>`
      };
      
      try {
        await transporter.sendMail({
            from: 'shopconnecthenry@gmail.com',
            to: mail,
            subject: 'Welcome to ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
            html: `<h1>Welcome ${name},</h1><h2>Thank you for signing up for ShopConnect.</h2><a href="https://shopconnectt.onrender.com/">GO STORE</a>`
          });
        return { message: 'new user registered successfully', userData };
      } catch (error) {
        
        console.error('Error sending Mail', error);
        return { message: 'new user registered successfully, but failed to send registration email', userData };
      }
    } else {
      return { message: `email: ${mail} was already registered previously` };
    }
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { createUserHandlers };