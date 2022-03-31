const mongoose = require('mongoose');

const poetrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please Enter Title"],
    },
    starting: {
        type: String
    },
    poet : {
        type: String,
        required: [true,"Please Enter Poet"],
    },
    poetry: {
        type: String,
        required: [true,"Please Enter Poetry"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Poetry', poetrySchema);