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
					return (
						<FeedItem
							key={`${photo.url}-${i}`}
							url={photo.url}
							likes={photo.likes}
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