const { user } = require('../models/index');

async function addUserTodb(data) {
    const { name, email, password } = data;

    const newUser = new user({
        name, email, password
    });

    try {

        return await newUser.save();

    } catch (error) {
        console.error('Coudld not add user to database', error);
    }
}

module.exports = {
    addUserTodb
}