import { configureStore, ThunkAction, Action,  getDefaultMiddleware } from "@reduxjs/toolkit";
import mainPageReducer from "../pages/mainPageSlice";
import ReduxLogger from "redux-logger"

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(ReduxLogger)

export const store = configureStore({
    middleware,
    reducer: {
        mainPage: mainPageReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
