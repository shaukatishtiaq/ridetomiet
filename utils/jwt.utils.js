const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_KEY;

async function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email
    };


    return token = await jwt.sign(payload, secretKey, { expiresIn: '24h' });
}

async function decodeToken(token) {
    const decodedToken = await jwt.verify(token, secretKey);
    return decodedToken;
}

module.exports = {
    generateToken,
    decodeToken
}