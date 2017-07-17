import React from 'react';
import { connect } from 'react-redux';
import FeedItem from '../components/FeedItem.jsx';
import Form from '../components/Form.jsx';

// this should have a container
const FeedPage = ({ photos }) => {
	return (
		<div className="FeedPage">
			<Form />
			{
				photos.map((photo, i) => {
					/* should we just be passing in the whole photo here?*/
					return (
						<FeedItem
							key={`${photo.url}-${i}`}
							url={photo.url}
							likes={photo.likes}
							id={photo.id}
							userLiked={photo.userLiked}
						/>
					);
				})
			}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		photos: state.photos
	};
};

export default connect(mapStateToProps)(FeedPage);