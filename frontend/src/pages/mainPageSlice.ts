import { createSlice } from "@reduxjs/toolkit"
import IMoviesList from "../services/types"

const initialState: IMoviesList = {
    movies: [],
    loading: false,
    nextPage: 0,
    filterSearch: "",
    filterGenre: "Action",
    filterDateStart: 0,
    filterDateEnd: 0
}

const MainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.nextPage += 1
            if (state.movies !== null) {
                console.log("concat", state.movies?.length, "and", action.payload.length)
                state.movies = state.movies.concat(action.payload)
            }
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setSearchQuery(state, action) {
            state.filterSearch = action.payload
        }
    },
})

export const { setMovies, setLoading } = MainPageSlice.actions
export default MainPageSlice.reducer