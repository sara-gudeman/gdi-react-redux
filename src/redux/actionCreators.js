import { UPLOAD_IMAGE, TOGGLE_LIKE } from './actionTypes';

// we use action.payload as convention, do we want to that here?
export function uploadImage(url) {
	const id = Date.now();
	return {
		type: UPLOAD_IMAGE,
		url,
		id
	};
}

export function toggleLike(id) {
	return {
		type: TOGGLE_LIKE,
		id
	};
}