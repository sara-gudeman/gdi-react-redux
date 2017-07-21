import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actionCreators';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleFormSubmit(event) {
		event.preventDefault();
		console.log('submitting')
		this.props.handleAddPhoto(this.state.userInput);
		this.setState({
			userInput: ''
		});
	}
	handleInputChange(event) {
		const value = event.target.value;
		this.setState({
			userInput: value
		});
	}
	render() {
		return (
			<form className="Form">
				<input placeholder="enter a url here" value={this.state.userInput} onChange={this.handleInputChange} />
				<button onClick={this.handleFormSubmit}>Submit</button>
			</form>
		);
	}
}

export default Form;