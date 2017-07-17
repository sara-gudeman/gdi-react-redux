import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actionCreators';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log('submitting')
		// normally uploading an image would be some kind of promise and we could reset the userInput after success
		// this is a little messy
		this.props.handleUploadImage(this.state.userInput);
		this.setState(() => {
			return {
				userInput: ''
			};
		});
	}
	handleInputChange(e) {
		// this is a tricky part...if we just user simple setState we don't need to do this
		const value = e.target.value;
		// do we want to just do a simple setState here with an object? or keep using functions?
		this.setState(() => {
			return {
				userInput: value
			};
		});
	}
	render() {
		return (
			<form className="Form">
				<input placeholder="enter a url here" value={this.state.userInput} onChange={this.handleInputChange} />
				<button onClick={this.onSubmit}>Submit</button>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleUploadImage: (userInput) => {
			dispatch(uploadImage(userInput));
		}
	};
};

export default connect(null, mapDispatchToProps)(Form);
