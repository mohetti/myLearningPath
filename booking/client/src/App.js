import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    async function fetchApi() {
      const fetchData = await fetch('http://localhost:5000/rest/rooms', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      const transformedData = await fetchData.json();
      console.log(transformedData);
      setData(transformedData);
    }
    fetchApi();
  }, []);

  return <div>Hi there</div>;
}

export default App;
