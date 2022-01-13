import React, { useEffect } from 'react';
function Feed(props) {
  useEffect(() => {
    console.log('Test');
  }, []);

  return <div>Feed</div>;
}

export default Feed;
