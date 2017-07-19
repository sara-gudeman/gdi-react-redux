import React from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../redux/actionCreators';

const Likes = (props) => {
	const { totalLikes, handleLikeButtonClick, userLiked } = props;
	return (
		<div className="Likes">
			<span>{ totalLikes } likes</span>
			<span className="Likes-like-button" onClick={handleLikeButtonClick}>
				{userLiked ? 'Unlike' : 'Like'}
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleLikeButtonClick: () => {
			dispatch(toggleLike(ownProps.id));
		}
	};
};

export default connect(null, mapDispatchToProps)(Likes);