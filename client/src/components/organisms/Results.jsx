import React from 'react';
import Card from '../molecules/Card';
import * as styles from './Results.module.scss';

const Results = ({ data }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.results}>
        {data?.map((el, i) => <Card key={i} {...el} />)}
      </div>
    </div>
  );
}

export default Results;