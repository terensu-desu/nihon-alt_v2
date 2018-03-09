import axios from "axios";
import * as actionTypes from "./actionTypes";

export const uploadStart = () => {
	return {
		type: actionTypes.UPLOAD_START
	};
};

export const uploadSuccess = () => {
	return {
		type: actionTypes.UPLOAD_SUCCESS
	};
};

export const uploadFail = (error) => {
	return {
		type: actionTypes.UPLOAD_FAIL,
		error: error
	};
};

export const upload = (uploadData, token) => {
	return dispatch => {
		dispatch(uploadStart());
		axios.post("https://nihonalt.firebaseio.com/uploads.json?auth=" + token, uploadData)
			.then(res => {
				dispatch(uploadSuccess())
			})
			.catch(err => {
				dispatch(uploadFail(err.res.data.error))
			});
	};
};