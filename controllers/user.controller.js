const express = require('express');

const { dbUtils } = require('../utils');

function getUserFromdb(req, res, next) {
    res.json(req.params);
}

async function postUserTodb(req, res, next) {
    const data = await dbUtils.addUserTodb(req.body);
    res.json(data);
}

module.exports = {
    getUserFromdb,
    postUserTodb
}