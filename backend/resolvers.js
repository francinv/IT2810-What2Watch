const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
        getAllMovies: async () => {
            const movies = await Movie.find()
            return movies
        },
    },
};

module.exports = resolvers;