const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const auth_Handlers = require('../../handlers/authHandlers/auth_Handlers');

const login = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await auth_Handlers.getUserByMail(mail);

        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const isPasswordValid = await auth_Handlers.checkPassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const jwtToken = jwt.sign({
            id: user.id,
            name: user.name,
            last_name: user.last_name,
            phone: user.phone,
            address: user.address,
            active: user.active,
            administrator: user.administrator
        }, JWT_SECRET);

        res.status(200).json({ isAuthenticated: true, token: jwtToken });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = { login };