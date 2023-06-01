require('dotenv').config();

const { expressConfig, dbConfig } = require('./config');

const express = require('express');
const app = express();

async function createExpressApp() {
    await expressConfig.configExpressApp(app);

    await dbConfig.createDbConnection();

    app.listen(process.env.PORT, () => {
        console.log("Server is up");
    });
}

createExpressApp();