import React from 'react';
import { connect } from 'react-redux';
import Likes from './Likes.jsx';

// class Card extends React.Component {
// 	render() {
// 		return (
// 			<div className="Card">
// 				<img src="http://forgifs.com/gallery/d/217571-1/Cat-kiss-nuzzle.gif" />
// 				<p>Likes:</p>
// 				<p>Like</p>
// 				Comments
// 			</div>
// 		);
// 	}
// }

const FeedItem = ({ url, likes, id }) => {
	return (
		<div className="FeedItem">
			<img src={url} />
			<Likes totalLikes={likes} id={id} />
			Comments
		</div>
	);
};

export default connect()(FeedItem);