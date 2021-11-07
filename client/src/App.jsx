import React from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/constants';

function App() {
  const [print, setPrint] = React.useState()
  const [input, setInput] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}?artist=${input}`);
      setPrint(res.data.msg);
    } catch(error) {
      setPrint(error.response.data)
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
      {print && <h2>{print}</h2>}
    </div>
  );
}

export default App;
