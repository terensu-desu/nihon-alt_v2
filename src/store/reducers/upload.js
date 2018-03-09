import * as actionTypes from "../actions/actionTypes";

const initalState = {
	error: null,
	loading: false
};

const reducer = (state = initalState, action) => {
	switch(action.type) {
		case actionTypes.UPLOAD_START:
			return {
				...state,
				error: null,
				loading: true
			};
		case actionTypes.UPLOAD_SUCCESS:
			return {
				...state,
				error: null,
				loading: false
			};
		case actionTypes.UPLOAD_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		default:
			return {...state};
	}
};

export default reducer;