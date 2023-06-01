require('dotenv').config();

const { expressConfig } = require('./config');

const express = require('express');
const app = express();

async function createExpressApp() {
    await expressConfig.configExpressApp(app);

    app.listen(process.env.PORT, () => {
        console.log("Server is up");
    });
}

createExpressApp();