const mongoose = require('mongoose');

const mehfilSchema = new mongoose.Schema({
    Date: {
        type: Date,
        required: true,
    },
    Location : {
        type: String,
        default: "google map location point api",
    },
    
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
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

module.exports = mongoose.model('Mehfil', mehfilSchema);