import React from 'react';

const Comment = ({ username, text }) => {
	return (
		<div className="Comment">
			{text}
			{username}
		</div>
	);
};

export default Comment;