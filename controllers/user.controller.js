const express = require('express');

function getUserFromdb(req, res, next) {
    res.json(req.params);
}

function postUserTodb(req, res, next) {
    res.json(req.body);
}

module.exports = {
    getUserFromdb,
    postUserTodb
}