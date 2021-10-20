const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Movie {
        id:ID
        title: String
        release_date: Float
        genres: [String]
    }

    type Query {
        getAllMovies: [Movie]
        getMovieById(id: ID!): Movie
        getMoviesBySearch(searchQuery: String, searchGenre: String): [Movie]
    }

`
module.exports = typeDefs;