const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Movie {
        id:ID
        title: String
        release_date: Float
        genres: [String]
    }

    type fullMovie {
        id: ID
        overview: String
    }

    type Query {
        getMovieById(id: ID!): fullMovie 
        getMoviesBySearch(searchDateStart: Int, searchDateEnd: Int, searchQuery: String, searchGenre: [String], page: Int): [Movie]
    }
`
module.exports = typeDefs;