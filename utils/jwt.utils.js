const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_KEY;

async function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email
    };
    try {
        return await jwt.sign(payload, secretKey, { expiresIn: '24h' });
    }
    catch (err) {
        console.error(err.message, " genereateToken in jwt.utils error.");
    }
}

async function decodeToken(token) {
    try {
        return await jwt.verify(token, secretKey);
    }
    catch (err) {
        console.error(err.message, " error in decodeToken() in jwt.utils");
    }
}

module.exports = {
    generateToken,
    decodeToken
}