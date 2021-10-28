import Movie from "./models/Movie.model";

const resolvers = {
  Query: {
    getMoviesBySearch: async (
      _parent: unknown,
      args: {
        searchDateStart: number;
        searchDateEnd: number;
        searchQuery: string;
        searchGenre: string[];
        page: number;
        sortCriteria: string;
      }
    ) => {
      const limit = 30;
      const offset = limit * args.page;
      return await Movie.find({
        title: {
          $regex: args.searchQuery,
          $options: "i",
        },
        release_date: {
          $gte: args.searchDateStart,
          $lte: args.searchDateEnd,
        },
        genres: {
          $all: Array.from(args.searchGenre),
        },
      })
        .limit(limit)
        .skip(offset)
        .sort(args.sortCriteria);
    },
  },
  Mutation: {
    setMovieAsFavorite: async (_parent: unknown, args: {
      name: string,
      movie_id: string
    }) => {
      const movie = await Movie.findById(args.movie_id);
      console.log(movie.favoritedByUser);
      return movie
    }
  }
};

module.exports = resolvers;
