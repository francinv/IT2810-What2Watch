const Movie = require('./models/Movie.model')
const resolvers = {
    Query: {
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