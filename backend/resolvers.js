const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
        getAllMovies: async () => {
            return await Movie.find()
        },
        getMoviePage: async (_parent, {page}, _context, _info) => {
            const limit = 15
            const offset = limit * (page - 1)
            return (await Movie.find({})
                .limit(parseInt(limit))
                .skip(parseInt(offset)))
        },
        getMovieById: async (_parent, { id }, _context, _info) => {
            return await Movie.findById(id);
        },
        getMoviesBySearch: async (_parent, args, _context, _info) => {
            const limit = 30
            const offset = limit * (args.page)
            if (args.searchQuery && args.searchGenre) {
                return await (Movie.find({ genres: String(args.searchGenre), title: { $regex: String(args.searchQuery), $options: "i" } })
                .limit(parseInt(limit))
                .skip(parseInt(offset)))
            }
            else if (!args.searchQuery && args.searchGenre) {
                return await (Movie.find({ genres: String(args.searchGenre) })
                .limit(parseInt(limit))
                .skip(parseInt(offset)))
                    
            }
            else if (args.searchQuery && !args.searchGenre) {
                return await (Movie.find({ title: { $regex: String(args.searchQuery), $options: "i" } })
                .limit(parseInt(limit))
                .skip(parseInt(offset)))
            }
        },
    },
};


module.exports = resolvers;