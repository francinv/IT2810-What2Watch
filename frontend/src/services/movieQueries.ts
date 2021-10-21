import gql from "graphql-tag";

export const GET_ALL_MOVIES = gql`
    query getAllMovies {
        getAllMovies {
            title
            release_date
            genres
        }
    }
`;
