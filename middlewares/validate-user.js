const { jwtUtils, dbUtils, passwordUtils } = require('../utils');
const express = require('express');

async function checkUserIsLoggedIn(req, res) {
    if (req.cookies.credentials) {
        const token = await jwtUtils.decodeToken(req.cookies.credentials);

        const user = await dbUtils.getUserFromdb(token);

        if (token.password == user.password && token.email == user.email) {
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return false;
    }
}

module.exports = {
    checkUserIsLoggedIn,
}