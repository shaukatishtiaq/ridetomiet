const express = require('express');
const cookieParser = require('cookie-parser');

const { userRouter, postRouter } = require('../routes');

async function configExpressApp(app) {

    app.use(express.json());
    app.use(cookieParser());

    app.use('/user/', userRouter);
    app.use('/post/', postRouter);
}

module.exports = {
    configExpressApp
}