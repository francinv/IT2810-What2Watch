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
      console.log(
        "query:",
        "page",
        page,
        "searchQuery",
        searchQuery,
        "searchGenre",
        searchGenre,
        "searchDateStart",
        searchDateStart,
        "searchDateEnd",
        searchDateEnd,
        "sortByCriteria",
        sortCriteria
      );
      const response = await apolloClient.query({
        query: GET_MOVIES_BY_SEARCH,
        variables: {
          page: page,
          searchQuery: searchQuery,
          searchGenre: searchGenre.length ? searchGenre : ["Action"],
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
}

export default new MovieService();
