import React from 'react';

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
		this.state = {
			isLiked: false
		}
	}
	handleLikeButtonClick() {
		this.setState((state) => {
			return {
				isLiked: !state.isLiked
			};
		});
	}
	render() {
		return (
			<div className="Likes">
				<span>{ this.props.totalLikes } likes</span>
				<span className="Likes-like-button" onClick={this.handleLikeButtonClick}>
					{this.state.isLiked ? 'Unlike' : 'Like'}
				</span>
			</div>
		);
	}
}

export default Likes;