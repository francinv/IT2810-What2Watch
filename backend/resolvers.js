const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
        getAllMovies: async () => {
            const movies = await Movie.find()
            return movies
        },
        getMovieById: async (_parent, { id }, _context, _info) => {
            return await Movie.findById(id);
        },
        getMoviesBySearch: async (_parent, args, context, _info) => {
            if (args.searchQuery && args.searchGenre) {
                return await Movie.find({ genres: String(args.searchGenre), title: { $regex: String(args.searchQuery), $options: "i" } });
            }
            else if (!args.searchQuery && args.searchGenre) {
                return await Movie.find({ genres: String(args.searchGenre) });
            }
            else if (args.searchQuery && !args.searchGenre) {
                return await Movie.find({ title: { $regex: String(args.searchQuery), $options: "i" } });
            }
        },
    },
};


module.exports = resolvers;