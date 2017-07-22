import React from 'react';

// write a stateless functional component that takes in a url as a prop, and renders the image with that url
// be sure to give it a class name "Image" to get the proper styling

const Image = (props) => {
  return (
      <img className="Image" src={props.url} />
    );
}

export default Image; 
