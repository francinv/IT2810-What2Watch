import { createSlice } from "@reduxjs/toolkit"
import IMoviesList from "../services/types"

const initialState: IMoviesList = {
    movies: [],
    loading: false,
    nextPage: 0,
    filterSearch: "",
    filterGenre: ["Action", "Adventure"],
    filterDateStart: -1635203598,
    filterDateEnd: 1635203598
}

const MainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.nextPage += 1
            if (state.movies !== null) {
                state.movies = state.movies.concat(action.payload)
            }
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setSearchQuery(state, action) {
            state.filterSearch = action.payload
        },
        setFilterGenres(state, action) {
            console.log("Payload", action.payload)
            state.filterGenre = action.payload
        },
        emptyMovies(state) {
            console.log("Emptying movies")
            state.movies = []
        }
    },
})

export const { setMovies, setLoading, setFilterGenres, emptyMovies } = MainPageSlice.actions
export default MainPageSlice.reducer