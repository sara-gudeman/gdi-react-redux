import React, { Component } from 'react';

class HelloGoodbye extends Component {
  hello () {
    console.log('hellllooooooooo');
    this.goodbye(); 
  }

  goodbye () {
    console.log('I SAY GOOD DAY');
  }


  render () {
    this.hello(); 
    return (
      <div>
        React is the best!
      </div>
    );
  }
}

export default HelloGoodbye; 
