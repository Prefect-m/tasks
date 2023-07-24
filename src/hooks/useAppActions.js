import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { rootActions } from "../store/root-action"

export const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(rootActions, dispatch)
}
