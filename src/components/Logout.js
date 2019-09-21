import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'
import { Navbar, Nav , Form, Button } from 'react-bootstrap';

//props get passed into a functional component as an object argument
const Logout = ({ logout, history  }) => {

    // const handleSubmit = event => {
        
    // }

    return (
      <Form onSubmit={ (event) => {
        event.preventDefault()
        logout()
        history.push('/')
        }
      }>
      {/* <form onSubmit={ (event) => {
          event.preventDefault()
          logout()
          history.push('/')
          }
        }> */}
          <Button variant="outline-primary" type="submit">Log Out</Button>
        {/* <input type="submit" value="Log Out"/> */}
      {/* </form> */}
      </Form>
    )
}



//Connect is a function that takes up to 4 arguments, and returns a function that takes a component and returns a component
//If I dont need mapstatetoprops as my first argument, I need to reference it as null to avoid it seeing it as mapstatetoprops
export default withRouter(connect(null, { logout } )(Logout))