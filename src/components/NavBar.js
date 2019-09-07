import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'
// import { NavLink } from 'react-router-dom'

//Functional Component:
const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
        { currentUser ? `Welcome, ${currentUser.name}` : "" }
       { currentUser ? <Logout /> : <Login /> }
      {/* { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null} */}
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
    currentUser
    // loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)