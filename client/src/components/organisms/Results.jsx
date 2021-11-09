import React from 'react';
import Card from '../molecules/Card';

const Results = ({ data }) => {

  return (
    <div>
      {data?.map((el, i) => <Card key={i} {...el} />)}
    </div>
  );
}

export default Results;