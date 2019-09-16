import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'
// import { NavLink } from 'react-router-dom'

//Functional Component:
const NavBar = ({ currentUser }) => {
    return (
        // IMPORTANT!: Add conditional in case user doesnt have any bookmarks and link to them

        
        //DELETE BOOKMARKS FROM HERE!!!!
        <div className="NavBar">
            {currentUser ? `Welcome, ${currentUser.attributes.name}` : ""} 
            {/* <button>Log In</button> Or <button>Sign Up</button> */}
            {/* {currentUser ? <Logout /> : <Login />} */}
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
    } 
}

export default connect(mapStateToProps)(NavBar)