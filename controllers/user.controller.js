const express = require('express');

const { dbUtils } = require('../utils');

async function getUserFromdb(req, res, next) {
    const data = await dbUtils.getUserFromdb(req.body);

    if (data == null) {
        res.status(301).json({ message: "User not found" });
    }
    else {
        res.json(data);
    }
}

async function postUserTodb(req, res, next) {
    const data = await dbUtils.addUserTodb(req.body);
    res.json(data);
}

module.exports = {
    getUserFromdb,
    postUserTodb
}