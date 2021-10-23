import { RootState } from "../services/store"

export const selectMovies = (state: RootState) => state.mainPage.movies;