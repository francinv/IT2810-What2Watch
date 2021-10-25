import gql from "graphql-tag";

export const GET_ALL_MOVIES = gql`
    query getAllMovies {
        getAllMovies {
            id
            title
            release_date
            genres
        }
    }
`;

export const GET_MOVIES_BY_SEARCH = gql`
    query searchMovies($searchGenre: String, $page: Int, $searchQuery: String) {
        getMoviesBySearch(searchGenre: $searchGenre, page: $page, searchQuery: $searchQuery) {
            id
            title
            release_date
            genres
        }
    }
`;
