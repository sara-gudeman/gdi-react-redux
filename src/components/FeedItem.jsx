import React from 'react';
import Image from './Image.jsx';
import Likes from './Likes.jsx';

const FeedItem = ({ photo }) => {
  const { url, likes, id, userLiked } = photo;
  return (
    <div className="FeedItem">
      <Image url={url} />
      <Likes totalLikes={likes} id={id} userLiked={userLiked} />
    </div>
  );
};

export default FeedItem;