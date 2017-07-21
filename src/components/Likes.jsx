import React from 'react';

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numLikes: this.props.totalLikes
		};
		this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
	}
	handleLikeButtonClick() {
		this.setState((prevState) => {
			return {
				numLikes: prevState.numLikes + 1
			};
		});
	}
	render() {
		return (
			<div className="Likes">
				<span>{ this.state.numLikes } likes</span>
				<span className="Likes-like-button" onClick={this.handleLikeButtonClick}>
					Like
				</span>
			</div>
		);
	}
}

export default Likes;