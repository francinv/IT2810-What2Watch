import { Action } from "../action/actions"
import { ActionType } from "../action/actiontypes"
import { MovieState } from "../movieType"
import { Reducer } from "redux"

const initialState = {
    movies: [],
    searchQuery: ""
}

export const movieReducer: Reducer<MovieState, Action> = (
    state: MovieState = initialState,
    action: Action
    ) => {
        switch (action.type) {
            case ActionType.GET_MOVIES:
                return state = {
                    ...state,
                    movies: action.payload
                }
            case ActionType.SEARCH_MOVIES:
                return state = {
                    ...state,
                    searchQuery: action.payload
                }
            default:
                return state
        }
    }
    
export default movieReducer;
