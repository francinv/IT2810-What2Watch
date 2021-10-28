/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: removeMovieAsFavorite
// ====================================================

export interface removeMovieAsFavorite_removeMovieAsFavorite {
  __typename: "Movie";
  favoritedByUser: (string | null)[] | null;
}

export interface removeMovieAsFavorite {
  removeMovieAsFavorite: removeMovieAsFavorite_removeMovieAsFavorite | null;
}

export interface removeMovieAsFavoriteVariables {
  name?: string | null;
  movieId?: string | null;
}
