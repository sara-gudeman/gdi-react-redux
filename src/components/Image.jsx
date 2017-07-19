import React from 'react';

const Image = (props) => {
    const { url } = props;
    return (
        <img className="Image" src={ url } />
    );
};

export default Image;