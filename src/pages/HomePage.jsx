import React from 'react';
import FeedList from '../components/FeedList.jsx';
import Form from '../components/Form.jsx';

const HomePage = () => {
	return (
		<div className="HomePage">
			<Form />
			<FeedList />
		</div>
	);
};

export default HomePage;