import React, { useRef } from 'react';
import * as styles from './Card.module.scss';

const Card = ({ images, name, popularity }) => {
  const titleRef = useRef()
  const popularityRef = useRef()

  return (
    <div className={styles.wrapper}>
      <picture>
        <source srcSet={images[1].url} media="(min-width: 320px)" />
        <source srcSet={images[0].url} media="(min-width: 1024px)" />
        <img src={images[1].url} alt="" />
      </picture>
        <div className={styles.info}>
          <div>
            <label htmlFor={titleRef.current}>Title:</label>
            <h3 ref={titleRef}>{name}</h3>
          </div>
          <div>
            <label htmlFor={popularityRef.current}>Popularity:</label>
            <p ref={popularityRef}>{popularity}</p>
          </div>
        </div>      
    </div>
  );
}

export default Card;