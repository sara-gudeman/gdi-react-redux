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
				const newPhoto = Object.assign({}, photo);
				newPhoto.userLiked = !userLikedPhoto,
				newPhoto.likes = !userLikedPhoto ? photo.likes + 1 : photo.likes - 1
				return newPhoto;
			}
			return photo;
		});
	}

	return state;
};

// this is for demonstration purposes. if you had more than one reducer you would need to use combine reducers
const rootReducer = combineReducers({ photos });

export default rootReducer;