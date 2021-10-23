/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchMovies
// ====================================================

export interface searchMovies_getMoviesBySearch {
  __typename: "Movie";
  id: string | null;
  title: string | null;
  release_date: number | null;
  genres: (string | null)[] | null;
}

export interface searchMovies {
  getMoviesBySearch: (searchMovies_getMoviesBySearch | null)[] | null;
}

export interface searchMoviesVariables {
  searchGenre?: string | null;
  page?: number | null;
  searchQuery?: string | null;
}
