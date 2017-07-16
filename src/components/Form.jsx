import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		console.log('submitting')
		console.log(this.input.value)
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

export default Form;