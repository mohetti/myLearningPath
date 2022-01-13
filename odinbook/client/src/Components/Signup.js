import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const api = axios.create({
  baseURL: 'http://localhost:9000/login',
});

function Signup(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [missingFields, setMissingFields] = useState('');
  const [redirectInit, setRedirectInit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMissingFields('');
    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPw !== ''
    ) {
      if (password !== confirmPw) {
        return setMissingFields('Passwords dont match');
      } else {
        let dataPackage = {
          firstName,
          lastName,
          email,
          password,
        };
        api
          .post('/signup', dataPackage)
          .then((res) => {
            setRedirectInit(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      return setMissingFields('Fill out all the fields');
    }
  };

  return (
    <div>
      {redirectInit ? <Redirect to="/login" /> : null}

      <h1 className="text-center">Welcome to OdinBook</h1>

      <Form>
        <FormGroup className="login-form">
          <Label>First Name</Label>
          <Input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Label>Last Name</Label>
          <Input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={(e) => setConfirmPw(e.target.value)}
          />
          <Button
            className="mt-2 btn-lg btn-dark col-12"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
          <div className="pt-3 text-center">Already have an account?</div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <div className="text-center">
            Or login in with your Email{' '}
            <span>
              <a href="/login">Log in!</a>
            </span>
          </div>
          {missingFields !== '' && (
            <Alert className="text-center mt-3 alert-danger">
              {missingFields}
            </Alert>
          )}
        </FormGroup>
      </Form>
    </div>
  );
}

export default Signup;
