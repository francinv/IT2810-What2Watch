const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    release_date: {
        type: Number,
    }

})

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;