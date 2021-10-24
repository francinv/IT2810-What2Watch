import { RootState } from "../services/store"

export const selectMainPage = (state: RootState) => state.mainPage
export const selectMovies = (state: RootState) => state.mainPage.movies;
export const selectLoading = (state: RootState) => state.mainPage.loading;
export const selectNext = (state: RootState) => state.mainPage.nextPage;
export const selectSearch = (state: RootState) => state.mainPage.filterSearch;
export const selectFilter = (state: RootState) => state.mainPage.filterGenre;