import { combineReducers } from 'redux';
import data from '../../data.json';
const initialPhotos = data.photos;

// these would usually be in different files
const photos = (state = initialPhotos, action) => {
	if (action.type === 'UPLOAD_IMAGE') {
		return [
			{
				id: action.id,
				url: action.url,
				likes: 0
			},
			...state
		];
	} else if (action.type === 'TOGGLE_LIKE') {
		return state.map((photo) => {
			const userLikedPhoto = photo.userLiked;
			if (photo.id === action.id) {
				photo.userLiked = !userLikedPhoto,
				photo.likes = !userLikedPhoto ? photo.likes + 1 : photo.likes - 1
			}
			return photo;
		});
	}

	return state;
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	return state;
};

const rootReducer = combineReducers({ photos, visibilityFilter });

export default rootReducer;