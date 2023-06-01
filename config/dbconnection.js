const mongoose = require('mongoose');

async function createDbConnection() {
    try {

        await mongoose.connect(process.env.DB_URI);
        console.log(`DB is connected at ${process.env.DB_URI}`);

        mongoose.connection.on('error', (error) => {
            console.error(error);
        });

    } catch (error) {
        console.error("Error connecting to db", error);
    }

}

module.exports = {
    createDbConnection
}