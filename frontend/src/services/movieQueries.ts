import gql from "graphql-tag";

export const GET_MOVIES_BY_SEARCH = gql`
  query searchMovies(
    $page: Int
    $searchGenre: [String]
    $searchQuery: String
    $searchDateStart: Int
    $searchDateEnd: Int
    $sortByCriteria: String
  ) {
    getMoviesBySearch(
      page: $page
      searchGenre: $searchGenre
      searchQuery: $searchQuery
      searchDateStart: $searchDateStart
      searchDateEnd: $searchDateEnd
      sortByCriteria: $sortByCriteria
    ) {
      title
      genres
      release_date
      overview
      poster
    }
  }
`;
