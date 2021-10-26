const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
        getMovieById: async (_parent, { id }, _context, _info) => {
            return await Movie.findById(id);
        },
        getMoviesBySearch: async (_parent, args, _context, _info) => {
            const limit = 30
            const offset = limit * (args.page)
                return await (Movie.find({
                    title: {
                        $regex: args.searchQuery,
                        $options: "i" 
                    } ,
                    release_date: {
                        $gte: args.searchDateStart,
                        $lte: args.searchDateEnd
                    },
                    genres: {
                        $all: Array.from(args.searchGenre) 
                }})
                .limit(limit)
                .skip(offset))
        },
    },
};


module.exports = resolvers;