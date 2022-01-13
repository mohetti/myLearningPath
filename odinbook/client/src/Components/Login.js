import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import React, { useState, useRef } from 'react';
import './styles.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:9000/login',
});

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authFailRef = useRef('');
  const [redirectInit, setRedirectInit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    authFailRef.current = '';
    let dataPackage = {
      email,
      password,
    };
    api
      .post('/', dataPackage)
      .then((res) => {
        if (res.data.status === 401) {
          return (authFailRef.current = res.data.message);
        } else {
          let tokenAndId = JSON.stringify({
            token: res.data.token,
            id: res.data.userId,
          });
          localStorage.setItem('credentials', tokenAndId);
          return props.successLogin();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {props.loading && <div>Loading...</div>}
      {!props.loading && props.status === 403 && (
        <div>
          <h1 className="text-center">Welcome to OdinBook</h1>

          <Form>
            <FormGroup className="login-form">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="mt-2 btn-lg btn-dark col-12"
                onClick={handleSubmit}
              >
                Log in
              </Button>
              <div className="pt-3 text-center">
                Or continue with your social account
              </div>

              <div className="text-center">
                No account yet?{' '}
                <span>
                  <a href="/signup">Sign up!</a>
                </span>
              </div>
              {authFailRef.current !== '' && (
                <Alert className="text-center mt-3 alert-danger">
                  {authFailRef.current}
                </Alert>
              )}
            </FormGroup>
          </Form>
          <a href="http://localhost:9000/auth/facebook/login">
            <button>Facebook</button>
          </a>
        </div>
      )}
    </div>
  );
}
//          <FacebookLoginButton className="mt-3 mb-3" onClick={fbLogin} />

export default Login;
