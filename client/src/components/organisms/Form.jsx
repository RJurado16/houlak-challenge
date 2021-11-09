import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const Form = ({ updateData }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}?artist=${input}`);
      updateData(res.data);
    } catch(error) {
      error && alert(error.response.data);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <input 
          type="text"
          placeholder="Type artist name"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;