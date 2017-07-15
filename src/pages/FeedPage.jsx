import React from 'react';
import Card from '../components/Card.jsx';
import Form from '../components/Form.jsx';
import data from '../../data.json';

const FeedPage = () => {
	return (
		<div className="FeedPage">
			<Form />
			{
				data.cats.map((cat, i) => {
					return (
						<Card
							key={i}
							url={cat.url}
							likes={cat.likes}
						/>
					);
				})
			}
			<Card />
		</div>
	);
};

export default FeedPage;