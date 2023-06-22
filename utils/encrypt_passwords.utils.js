const bcrypt = require('bcryptjs');

const hash = process.env.HASH;

async function encryptPassword(password) {

    return await bcrypt.hash(password, 10);
}

async function checkIfPasswordMatches(password, hashedPassword) {

    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    encryptPassword,
    checkIfPasswordMatches
}