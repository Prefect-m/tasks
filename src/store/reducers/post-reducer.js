import { FETCH_POSTS_SUCCESS, SEARCH_POST, TOTAL_COUNT_POSTS } from "../types"

const initialState = {
	posts: [],
	totalPosts: null,
}

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
			return { ...state, posts: action.payload }
		case TOTAL_COUNT_POSTS:
			return { ...state, totalPosts: action.payload }
		case SEARCH_POST:
			return {
				...state,
				posts: state.posts.filter((item) =>
					item.title.toLowerCase().includes(action.payload.toLowerCase())
				),
			}
		default:
			return state
	}
}
