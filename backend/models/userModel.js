// models/userModel.js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    birthday: {
        type: String
        },
    contactNumber: {
        type: String
    },
    address: {
        type: String
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
