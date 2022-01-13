import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
function Home(props) {
  return (
    <div>
      {props.loading && <div>Loading...</div>}
      {!props.loading && props.status === 403 && <Redirect to="/login" />}
      {!props.loading && props.status === 200 && <div>Hello</div>}
    </div>
  );
}

export default Home;
