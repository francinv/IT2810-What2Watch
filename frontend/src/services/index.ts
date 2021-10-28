import { apolloClient } from "../graphql";
import { searchMovies } from "./__generated__/searchMovies";
import { GET_MOVIES_BY_SEARCH } from "./movieQueries";

class MovieService {
  async getMoviesBySearch(
    page: number,
    searchQuery: String,
    searchGenre: String[],
    searchDateStart: number,
    searchDateEnd: number,
    sortCriteria: String
  ): Promise<searchMovies["getMoviesBySearch"]> {
    try {
      const response = await apolloClient.query({
        query: GET_MOVIES_BY_SEARCH,
        variables: {
          page: page,
          searchQuery: searchQuery,
          searchGenre: searchGenre,
          searchDateStart: searchDateStart,
          searchDateEnd: searchDateEnd,
          sortCriteria: sortCriteria,
        },
      });
      if (!response || !response.data) {
        throw new Error("Cannot get movies");
      }
      return response.data.getMoviesBySearch;
    } catch (error) {
      throw error;
    }
  }

  /* async removeFavorite(
    name: string,
    movie_id: string,
  ): Promi */
}

export default new MovieService();
