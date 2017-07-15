import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		// this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log('submitting')
	}
	render() {
		return (
			<form>
				<input />
				<button onClick={this.onSubmit}>Submit</button>
			</form>
		);
	}
}

export default Form;