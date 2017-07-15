import React from 'react';

const CommentList = ({ comments }) => {
	return (
		<div className="CommentList">
			{comments.map((comment, i) => {
				return (
					<Comment text={text.username} username={comment.username} key={`comment-${i}`} />
				);
			})}
		</div>
	);
};

export default CommentList;