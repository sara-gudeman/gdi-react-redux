import React from 'react';

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
		this.state = {
			isLiked: false,
			totalLikes: this.props.totalLikes
		}
	}
	handleLikeButtonClick() {
		this.setState((state) => {
			return {
				isLiked: !state.isLiked,
				totalLikes: !state.isLiked ? state.totalLikes + 1 : state.totalLikes - 1
			};
		});
	}
	render() {
		return (
			<div className="Likes">
				<span>{ this.state.totalLikes } likes</span>
				<span className="Likes-like-button" onClick={this.handleLikeButtonClick}>
					{this.state.isLiked ? 'Unlike' : 'Like'}
				</span>
			</div>
		);
	}
}

export default Likes;