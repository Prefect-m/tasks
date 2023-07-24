import { combineReducers } from "redux"
import { postReducer } from "./reducers/post-reducer"

export const rootReducer = combineReducers({
	posts: postReducer,
})
