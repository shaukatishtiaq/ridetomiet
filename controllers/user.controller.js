const express = require('express');

const { dbUtils, passwordUtils, jwtUtils } = require('../utils');

async function loginUser(req, res, next) {
    const data = await dbUtils.getUserFromdb(req.body);

    try {
        if (data == null) {
            res.status(301).json({ message: "User not found", status: false });
        }
        else {
            if (await passwordUtils.checkIfPasswordMatches(req.body.password, data.password)) {

                if (req.cookies.credentials) {
                    const decodedCookie = await jwtUtils.decodeToken(req.cookies.credentials);

                    if (data.email === decodedCookie.email && data._id == decodedCookie.userId) {
                        res.json({ message: "You are already logged in", status: true });
                    }
                    else {
                        res.clearCookie('credentials');
                        res.json({ message: "You had a defected cookie", status: false });
                    }
                }
                else {
                    const token = await jwtUtils.generateToken(data);   //Send this token to user as a cookie or auth header.

                    res.cookie('credentials', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
                    res.json({ message: "You are now logged in.", status: true });
                }

            }
            else {
                res.json({ message: "Password incorrect", status: false });
            }
        }
    } catch (err) {
        console.error(err.message, " Error in user.controller.js in login route");
        res.clearCookie('credentials');
        res.status(400).json({ message: "Error!" });
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