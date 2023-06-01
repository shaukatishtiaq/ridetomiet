const express = require('express');

const { userRouter } = require('../routes')
async function configExpressApp(app) {

    app.use(express.json());
    app.use('/user/', userRouter);
}

module.exports = {
    configExpressApp
}