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
	}

	return state;
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	return state;
};

const rootReducer = combineReducers({ photos, visibilityFilter });

export default rootReducer;