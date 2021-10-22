import { createSelector } from "reselect";
import IRootState from "./types";

const selectMovies = (state: IRootState) => state.movies;

export const makeSelectMovies = createSelector(
  selectMovies,
  (mainPage) => mainPage
);