import React, { useState } from 'react';
import Form from './components/organisms/Form';
import Results from './components/organisms/Results';

const App = () => {
  const [result, setResult] = useState()
  const updateData = (data) => setResult(data)

  React.useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <div>
      <Form  updateData={updateData} />
      <Results data={result} />
    </div>
  );
}

export default App;
