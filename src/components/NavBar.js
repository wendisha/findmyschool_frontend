import React from 'react'
import Logout from './Logout.js'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ loggedIn }) => {
    return (
        <Navbar bg="info" variant="dark" >
            <Navbar.Brand>Find My School</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink exact activeClassName="active" to="/bookmarks" style={{ color: '#FFF' }}>Bookmarks  | </NavLink>
                <NavLink exact activeClassName="active" to="/browse-schools" style={{ color: '#FFF' }}> |  Browse Schools</NavLink>
            </Nav>
            { loggedIn ? <Logout/> : null }
        </Navbar>
    )
}

// I can do this because I know the incoming argument is an object, state, coming from redux, with a property called currentUser
// state = { ...,
//   currentUser: {...}
// }
//Meaning...
//The incoming argument (state) is an object, coming from Redux, therefore we can discontruct it and grab its currentUser property
//Allow App.js to have knowledge of the current user, to show the Login button only if user is logged out and vice versa
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
}
  
export default connect(mapStateToProps)(NavBar)