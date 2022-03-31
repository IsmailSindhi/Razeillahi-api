const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Home', homeSchema);