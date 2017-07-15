import React from 'react';
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

const Card = ({ url, likes }) => {
	return (
		<div className="Card">
			<img src={url} />
			<Likes totalLikes={likes} />
			Comments
		</div>
	);
};

export default Card;