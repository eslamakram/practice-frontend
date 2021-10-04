import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

export class Header extends Component {
  render() {

   const { isAuthenticated } = this.props.auth0;
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand >My Fav Fruits</Navbar.Brand>
      <Link to='/'>Home</Link>
      <Link to='/FavFruit'>Fav Fruits</Link>
      {
          isAuthenticated &&
      <Link to="/profile" className="nav-link">My Profile</Link>
        }
      {isAuthenticated? <LogoutButton/>: <LoginButton/>}
    
  </Navbar>
        
      </>
    )
  }
}

export default withAuth0(Header)
