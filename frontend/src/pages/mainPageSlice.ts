import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
}

const MainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {

    },
})

export const {   } = MainPageSlice.actions
export default MainPageSlice.reducer