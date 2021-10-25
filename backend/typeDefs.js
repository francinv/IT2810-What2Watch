const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Movie {
        id:ID
        title: String
        release_date: Float
        genres: [String]
    }

    type Query {
        getMoviePage(page: Int): [Movie]
        getAllMovies: [Movie]
        getMovieById(id: ID!): Movie
        getMoviesBySearch(searchQuery: String, searchGenre: String, page: Int): [Movie]
    }

`
module.exports = typeDefs;