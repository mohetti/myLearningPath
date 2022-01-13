import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
function Token(props) {
  const [loading, setLoading] = useState(true);
  const { tk } = useParams();
  const { id } = useParams();
  useEffect(() => {
    let tokenAndId = JSON.stringify({
      token: tk,
      id: id,
    });
    localStorage.setItem('credentials', tokenAndId);
    setLoading(false);
  }, [id]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && <Redirect to="/" />}
    </div>
  );
}

export default Token;
