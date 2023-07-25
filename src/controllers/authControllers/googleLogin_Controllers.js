const { JWT_SECRET, GOOGLE_CLIENT_ID } = process.env;
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const auth_Handlers = require('../../handlers/authHandlers/auth_Handlers');

const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;

        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });

        const { given_name, family_name, email, picture } = ticket.getPayload();

        let user = await auth_Handlers.getUserByMail(email);

        if (!user) {
            user = await auth_Handlers.createUser({ name: given_name, last_name: family_name, mail: email, picture });
        };

        const jwtToken = jwt.sign({
            id: user.id,
            name: user.name,
            last_name: user.last_name,
            phone: user.phone,
            address: user.address,
            picture: user.picture,
            active: user.active,
            administrator: user.administrator
        }, JWT_SECRET);

        const decodedToken = jwt.verify(jwtToken, JWT_SECRET);

        res.status(200).json({ isAuthenticated: true, user: decodedToken });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = { googleLogin };