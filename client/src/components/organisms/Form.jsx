import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import * as styles from './Form.module.scss';

const Form = ({ updateData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}?artist=${input}`);
      updateData({
        artist: input,
        data: res.data,
      });
    } catch(error) {
      error && updateData({ data: error.response.data });
    }
    setInput('');
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>Find your favourite artist!</h1>
        <div className={styles.interaction}>
          <input
            type="text"
            placeholder="Type artist name"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;