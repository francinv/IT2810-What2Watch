import { RootState } from "../services/store";

export const selectMainPage = (state: RootState) => state.mainPage;
export const selectMovies = (state: RootState) => state.mainPage.movies;
export const selectNextPage = (state: RootState) => state.mainPage.nextPage;
export const selectFilterSearch = (state: RootState) =>
  state.mainPage.filterSearch;
export const selectFilterGenre = (state: RootState) =>
  state.mainPage.filterGenre;
export const selectFilterDateStart = (state: RootState) =>
  state.mainPage.filterDateStart;
export const selectFilterDateEnd = (state: RootState) =>
  state.mainPage.filterDateEnd;
export const selectSortByCriteria = (state: RootState) =>
  state.mainPage.sortByCriteria;
