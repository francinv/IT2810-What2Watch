import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    release_date: Float
    genres: [String]
    overview: String
    poster: String
  }

  type Query {
    getMoviesBySearch(
      searchDateStart: Int
      searchDateEnd: Int
      searchQuery: String
      searchGenre: [String]
      page: Int
      sortCriteria: String
    ): [Movie]
  }
    type Movie {
        id:ID
        title: String
        release_date: Float
        genres: [String]
        overview: String
        poster: String
        favoritetByUser: [String]
    }

    type Query {
        getMoviesBySearch(searchDateStart: Int, searchDateEnd: Int, searchQuery: String, searchGenre: [String], page: Int): [Movie]
    }

    type Mutation { 
        setMovieAsFavorite(name: String, movie_id: ID): String
    }
`;

module.exports = typeDefs;
