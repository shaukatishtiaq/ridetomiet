const express = require('express');
const cookieParser = require('cookie-parser');

const { userRouter } = require('../routes');

async function configExpressApp(app) {

    app.use(express.json());
    app.use(cookieParser());

    app.use('/user/', userRouter);
}

module.exports = {
    configExpressApp
}