import React from 'react';
import * as styles from './Card.module.scss';

const Card = ({images, name, popularity}) => {

  return (
    <div className={styles.wrapper}>
        <img src={images[1].url} alt="" />
        <div className={styles.info}>
          <h3><span>Title: </span>{name}</h3>
          <p><span>Popularity: </span>{popularity}</p>
        </div>      
    </div>
  );
}

export default Card;