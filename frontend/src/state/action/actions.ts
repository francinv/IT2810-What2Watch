import { Movie } from "../movieType";
import { ActionType } from "./actiontypes";


interface GetMoviesAction {
    type: ActionType.GET_MOVIES,
    payload: Movie[];
}

interface PostReviewAction {
    type: ActionType.POST_REVIEW,
    payload: string;
}

interface SearchAction {
    type: ActionType.SEARCH_MOVIES,
    payload: string;
}

interface FilterAction {
    type: ActionType.FILTER_MOVIES,
    payload: string;
}

export type Action = GetMoviesAction | PostReviewAction | SearchAction | FilterAction