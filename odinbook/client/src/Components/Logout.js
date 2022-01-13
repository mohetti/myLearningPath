import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function Logout(props) {
  useEffect(() => {
    props.changeStatus();
  }, []);
  return <Redirect to="/login" />;
}

export default Logout;
