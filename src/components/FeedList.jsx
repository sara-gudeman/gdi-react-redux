import React from 'react';
import FeedItem from './FeedItem.jsx';

const FeedList = ({ photos }) => {
    return (
        <div className="FeedList">
            {
                photos.map((photo, i) => {
                    return (
                        <FeedItem
                            key={`${photo.url}-${i}`}
                            photo={photo}
                        />
                    );
                })
            }
        </div>
    );
};

export default FeedList;