import React from 'react';

// we'll do this
class NameAnnouncer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      userInput: value
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    alert(this.state.userInput);
    this.setState({
      userInput: ''
    });
  }
  render() {
    return (
      <form className="NameAnnouncer">
        <input placeholder="enter your name here" value={this.state.userInput} onChange={this.handleInputChange} />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default NameAnnouncer;