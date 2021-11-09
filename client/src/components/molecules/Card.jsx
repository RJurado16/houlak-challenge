import React from 'react';

const Card = ({images, name, popularity}) => {

  return (
    <div>
        <img src={images[1].url} alt="" />
        
        <h3><span>Title: </span>{name}</h3>
        <p><span>Popularity: </span>{popularity}</p>
    </div>
  );
}

export default Card;