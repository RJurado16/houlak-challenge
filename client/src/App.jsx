import React, { useState } from 'react';
import Form from './components/organisms/Form';
import Results from './components/organisms/Results';
import './App.scss'

const App = () => {
  const [result, setResult] = useState()
  const updateData = (data) => setResult(data)

  return (
    <div className="app">
      <Form  updateData={updateData} />
      <Results data={result} />
    </div>
  );
}

export default App;
