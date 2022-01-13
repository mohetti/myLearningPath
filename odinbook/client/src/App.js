import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './Components/Login';
import Token from './Components/Token';
import Home from './Components/Home';
import Logout from './Components/Logout';
import Friends from './Components/Friends';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:9000/',
});

function App() {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let token;
    if (localStorage.getItem('credentials') !== null) {
      token = JSON.parse(localStorage.getItem('credentials')).token;
    } else {
      token = null;
    }
    api
      .get('/jwtauth', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setStatus(res.data.status);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [status]);

  const changeStatus = () => {
    localStorage.clear();
    return setStatus(403);
  };

  const successLogin = () => {
    return setStatus(200);
  };

  return (
    <div>
      <Router>
        {!loading && status === 200 && (
          <div>
            <NavBar />
          </div>
        )}
        <div>
          <Switch>
            <Route exact path="/login">
              <Login
                successLogin={successLogin}
                loading={loading}
                status={status}
              />
            </Route>
            <Route exact path="/signup" component={Signup} />
            <Route path="/token/:tk/:id" component={Token} />
            <Route exact path="/profile">
              <Profile loading={loading} status={status} />
            </Route>
            <Route exact path="/friends">
              <Friends loading={loading} status={status} />
            </Route>
            <Route exact path="/logout">
              <Logout
                loading={loading}
                status={status}
                changeStatus={changeStatus}
              />
            </Route>
            <Route exact path="/">
              <Home loading={loading} status={status} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
