const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // rides: [{id, source, destination, time_at_posting_the_ride, estimated_time_to_reach_destination,amount, isDriver}]
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;