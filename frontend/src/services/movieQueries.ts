import gql from "graphql-tag";

export const GET_ALL_MOVIES = gql`
    query Query1 {
        getAllMovies {
            id
            title
            release_date
            genres
        }
    }
`;
