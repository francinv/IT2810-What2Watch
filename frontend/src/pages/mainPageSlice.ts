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
            if (state.movies !== null) {
                state.movies = state.movies.concat(action.payload)
                console.log("did it")
            }
            console.log("concat", state.movies?.length, "and", action.payload.length)
            
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
    },
})

export const { setMovies, setLoading } = MainPageSlice.actions
export default MainPageSlice.reducer