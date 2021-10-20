const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
        getAllMovies: async () => {
            const movies = await Movie.find()
            return movies
        },
        getMovieById: async (_parent, { id }, _context, _info) => {
            return await Movie.findById(id);
        }
    },
};


module.exports = resolvers;