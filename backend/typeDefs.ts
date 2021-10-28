import { gql } from 'apollo-server-express';

const typeDefs = gql`

    type Movie {
        id:ID
        title: String
        release_date: Float
        genres: [String]
        overview: String
        poster: String
    }

    type User { 
        id: ID
        name: String
        favorites: [Movie]
    }

    type Query {
        getMoviesBySearch(searchDateStart: Int, searchDateEnd: Int, searchQuery: String, searchGenre: [String], page: Int): [Movie]
    }

    type Mutation { 
        setMovieAsFavorite(name: String, movie: String): String
    }
`;

module.exports = typeDefs