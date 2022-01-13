import { Redirect } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';

/*
    ***** NEXT STEPS *****
      => add friend request button in client/Friends.js
      => handle Backend for friend-request in both requester and receiver
      => display "ausstehend" on /friends
      => display actual friends after req/rec cycle finished on /friends

      => go over to handling the posts strategy
*/

const api = axios.create({
  baseURL: 'http://localhost:9000/friends',
});

function Friends(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (loading) {
      setUserId(JSON.parse(localStorage.getItem('credentials')).id);
      api
        .get('/')
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [loading]);

  const renderUsers = () => {
    return users.map((x) => {
      if (x._id !== userId) {
        return (
          <div key={uniqid()}>
            {x.first_name} {x.last_name}
          </div>
        );
      } else {
        return;
      }
    });
  };

  return (
    <div>
      {props.loading && <div>Loading...</div>}
      {!props.loading && props.status === 403 && <Redirect to="/login" />}
      {!props.loading && props.status === 200 && loading && (
        <div>Loading...</div>
      )}
      {!props.loading && props.status === 200 && !loading && renderUsers()}
    </div>
  );
}

export default Friends;
