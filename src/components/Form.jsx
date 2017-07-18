import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actionCreators';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleFormSubmit(event) {
		event.preventDefault();
		console.log('submitting')
		// normally uploading an image would be some kind of promise and we could reset the userInput after success
		// this is a little messy
		this.props.onSubmit(this.state.userInput);
		this.setState({
			userInput: ''
		});
	}
	handleInputChange(event) {
		// this is a tricky part...if we just user simple setState we don't need to do this
		const value = event.target.value;
		// do we want to just do a simple setState here with an object? or keep using functions?
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

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userInput) => {
            dispatch(uploadImage(userInput));
        }
    };
};

export default connect(null, mapDispatchToProps)(Form);