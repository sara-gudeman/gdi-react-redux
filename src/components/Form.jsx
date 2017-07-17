import React from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/actionCreators';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log('submitting')
		this.props.handleUploadImage(this.input.value);
	}
	render() {
		return (
			<form>
				<input ref={(node) => {this.input = node}} />
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