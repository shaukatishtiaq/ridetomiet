const express = require('express');

const { dbUtils, passwordUtils, jwtUtils } = require('../utils');

async function loginUser(req, res, next) {
    const data = await dbUtils.getUserFromdb(req.body);

    if (data == null) {
        res.status(301).json({ message: "User not found" });
    }
    else {
        if (await passwordUtils.checkIfPasswordMatches(req.body.password, data.password)) {
            const token = await jwtUtils.generateToken(data);   //Send this token to user as a cookie or auth header.

            res.cookie('jwtToken', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
            res.json({ message: "You are now logged in.", status: true });

        }
        else {
            res.json({ message: "Password incorrect" });
        }
    }
}

async function signupUser(req, res, next) {

    const hashedPassword = await passwordUtils.encryptPassword(req.body.password);

    req.body.password = hashedPassword;

    const data = await dbUtils.addUserTodb(req.body);
    res.json(data);
}

module.exports = {
    loginUser,
    signupUser
}