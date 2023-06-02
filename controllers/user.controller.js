const express = require('express');

const { dbUtils, passwordUtils } = require('../utils');

async function getUserFromdb(req, res, next) {
    const data = await dbUtils.getUserFromdb(req.body);

    if (data == null) {
        res.status(301).json({ message: "User not found" });
    }
    else {
        if (await passwordUtils.checkIfPasswordMatches(req.body.password, data.password))
            res.json(data);
        else {
            res.json({ message: "Password incorrect" });
        }
    }
}

async function postUserTodb(req, res, next) {

    const hashedPassword = await passwordUtils.encryptPassword(req.body.password);

    req.body.password = hashedPassword;

    const data = await dbUtils.addUserTodb(req.body);
    res.json(data);
}

module.exports = {
    getUserFromdb,
    postUserTodb
}