import { Action } from "../action/actions"
import { ActionType } from "../action/actiontypes"

const initialState = Movie[];

const reducer = (state: Movie[] = initialState, action: Action): Movie[] => {
    switch(action.type)
}

export default reducer