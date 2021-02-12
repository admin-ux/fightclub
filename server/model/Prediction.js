const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema
const PredictionSchema = new Schema({
    winner: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    // Could just require sign in and no username before this
    username: {
        type: String,
        required: true
    },

    //Unique Fight ID
    UFid:{
        type: String,
        required: true
    }
});

module.exports = Prediction = mongoose.model('predictions', PredictionSchema);