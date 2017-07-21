import React from 'react';
import FeedList from '../components/FeedList.jsx';
import Form from '../components/Form.jsx';
import data from '../../data.json';

const { photos } = data;

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: photos
		}
		this.handleAddPhoto = this.handleAddPhoto.bind(this);
	}
	handleAddPhoto(url) {
		const newPhoto = {
				url: url,
				likes: 0
		};
		this.setState((prevState) => {
			return {
				photos: prevState.photos.concat([newPhoto])
			};
		});
	}
	render() {
		return (
			<div className="HomePage">
				<Form handleAddPhoto={this.handleAddPhoto} />
				<FeedList photos={this.state.photos} />
			</div>
		);
	}
}

export default HomePage;