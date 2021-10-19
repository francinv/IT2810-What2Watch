import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducers from "./state/reducers";

const initialState = {}

export const store = configureStore({
    reducer: reducers,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>