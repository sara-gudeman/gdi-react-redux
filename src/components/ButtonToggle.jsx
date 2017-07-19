import React from 'react';

// create a class component that toggles a button on and off
class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggledOn: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState((prevState) => {
      return {
        toggledOn: !prevState.toggledOn
      };
    });
  }
  render() {
    return (
      <div className="ButtonToggle">
        <button onClick={this.handleButtonClick}>{this.state.toggledOn ? 'On' : 'Off'}</button>
      </div>
    );
  }
}

export default ButtonToggle;