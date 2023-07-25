// import { API_URI } from "../../API"
import axios from "axios"
import { FETCH_POSTS_SUCCESS, SEARCH_POST, TOTAL_COUNT_POSTS } from "../types"

export function fetchPosts(limit, page) {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
			)
			dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data })
			dispatch({
				type: TOTAL_COUNT_POSTS,
				payload: response.headers["x-total-count"],
			})
		} catch (err) {
			console.log(err)
		}
	}
}
export function postSearch(searchTerm) {
	return (dispatch) => {
		dispatch({
			type: SEARCH_POST,
			payload: searchTerm,
		})
	}
}
