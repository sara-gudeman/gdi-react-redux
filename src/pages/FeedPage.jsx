import React from 'react';
import FeedListContainer from '../containers/FeedListContainer.jsx';
import UploadImageForm from '../containers/UploadImageForm.jsx';

const FeedPage = () => {
	return (
		<div className="FeedPage">
			<UploadImageForm />
			<FeedListContainer />
		</div>
	);
};

export default FeedPage;