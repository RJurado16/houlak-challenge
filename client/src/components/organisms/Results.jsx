import React from 'react';
import Card from '../molecules/Card';
import * as styles from './Results.module.scss';

const Results = ({ results }) => {
  const { artist, data } = results;

  return (
    <div className={styles.wrapper}>
      {Array.isArray(data) ? 
      <div>
        <div className={styles.title}>
          <h2>{artist.toUpperCase()}</h2>
        </div>
        <div className={styles.results}>
          {data?.map((el, i) => <Card key={i} {...el} />)}
        </div>
      </div>
      :
      <div className={styles.error}>
        <h2>{data}</h2>
        <p>Try searching another artist!</p>
      </div>
      }
    </div>
  );
}

export default Results;