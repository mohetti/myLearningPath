import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Home from './Home';
import Friends from './Friends';
import Logout from './Logout';
import Profile from './Profile';

function NavBar(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand as={Link} to="/">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/friends">
                  Friends
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
