const mongoose = require('mongoose');
/* import Movie from "./Movie.model" */

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    favorites: {
        type: [String]
    }

})

const User = mongoose.model("movie", UserSchema);
export default User;