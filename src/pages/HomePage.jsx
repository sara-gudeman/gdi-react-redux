import React from 'react';
import FeedList from '../components/FeedList.jsx';
import Form from '../components/Form.jsx';

const FeedPage = () => {
	return (
		<div className="FeedPage">
			<Form />
			<FeedList />
		</div>
	);
};

export default FeedPage;