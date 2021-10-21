import { createSlice } from "@reduxjs/toolkit"
import { IMoviesList } from "./types"

const initialState: IMoviesList = {
    movies: null
}

const MainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
    },
})

export const { setMovies } = MainPageSlice.actions
export default MainPageSlice.reducer