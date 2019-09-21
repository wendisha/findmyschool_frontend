import React from 'react'
import { connect } from 'react-redux'
// import Login from './Login.js'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import { Navbar, Nav , Form, Button } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";


//Functional Component:
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        // IMPORTANT!: Add conditional in case user doesnt have any bookmarks and link to them

        <div>
        <div className="NavBar">
            {/* <NavLink exact activeClassName="active" to="/bookmarks">My Bookmarks</NavLink>
            <NavLink exact activeClassName="active" to="/browse-schools">Browse Schools</NavLink> */}
            {/* {currentUser ? `Welcome, ${currentUser.attributes.name}` : ""}  */}
            {/* <button>Log In</button> Or <button>Sign Up</button> */}
            {/* {currentUser ? <Logout /> : <Login />} */}
            {/* { loggedIn ? <Logout/> : null } */}
        </div>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand>Find My School</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link> <NavLink to="/bookmarks">Bookmarks</NavLink></Nav.Link>
      {/* <Nav.Link> <Link to="/bookmarks">Bookmarks</Link></Nav.Link> */}
      <Nav.Link> <NavLink to="/browse-schools">Browse Schools</NavLink></Nav.Link>
      </Nav>
      { loggedIn ? <Logout/> : null }
    

  </Navbar>

  {/* 
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar> */}


</div>

    )
}

// I can do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
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