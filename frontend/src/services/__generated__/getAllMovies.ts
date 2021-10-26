/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllMovies
// ====================================================

export interface getAllMovies_getAllMovies {
  __typename: "Movie";
  id: string | null;
  title: string | null;
  release_date: number | null;
  genres: (string | null)[] | null;
}

export interface getAllMovies {
  getAllMovies: (getAllMovies_getAllMovies | null)[] | null;
}
