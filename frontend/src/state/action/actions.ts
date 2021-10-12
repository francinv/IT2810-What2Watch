import { ActionType } from "./actiontypes";

interface GetMoviesAction {
    type: ActionType.GET_MOVIES,
    payload: object;
}

interface PostReviewAction {
    type: ActionType.POST_REVIEW,
    payload: object;
}

export type Action = GetMoviesAction | PostReviewAction