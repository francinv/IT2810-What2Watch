import { createSlice } from "@reduxjs/toolkit"
import IMoviesList from "../services/types"

const initialState: IMoviesList = {
    movies: [],
    loading: false,
    nextPage: 2,
    filterSearch: "",
    filterGenre: "Action",
    filterDate: 0
}

const MainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.nextPage += 1
            state.movies = [state.movies, ...action.payload]
            console.log("concat", state.movies?.length, "and", action.payload.length)
            
        },
    },
})

export const { setMovies } = MainPageSlice.actions
export default MainPageSlice.reducer