const { user } = require('../models/index');

async function addUserTodb(data) {
    const { name, email, password } = data;

    if (!(await checkIfUserExists({ email: email }))) {
        const newUser = new user({
            name, email, password
        });

        try {

            return await newUser.save();

        } catch (error) {
            console.error('Coudld not add user to database', error);
        }
    }

    else {
        return { message: "User already exists." };
    }

}

async function getUserFromdb(data) {
    const { email, password } = data;

    try {
        const foundUser = await user.findOne({ 'email': email });
        return foundUser;
    }
    catch (error) {
        console.error(error, 'HELLLLooooo');
    }
}

async function checkIfUserExists(data) {
    try {
        //data must be an object.
        const foundUser = await user.findOne(data);
        if (foundUser == null) {
            return false;
        }
        else {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addUserTodb,
    getUserFromdb
}