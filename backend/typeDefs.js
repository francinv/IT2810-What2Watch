const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Movie {
        id:ID
        title: String
        release_date: Float
    }

    type Query {
        getAllMovies: [Movie]
    }
`
module.exports = typeDefs;