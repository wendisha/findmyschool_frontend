import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import { Button, Form, Container } from 'react-bootstrap';

//props get passed into a functional component as an object argument
const Login = ({ loginFormData, updateLoginForm, history, login }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
      <Container expand='md'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={loginFormData.username} name="username" placeholder="Enter username" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={loginFormData.password} name="password" placeholder="Enter password" onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" value="Log In">Log In</Button>
      </Form>
    </Container>
  )
}

//mapstatetoprops gives us access to chunks of state from the store as props, that we can use as an argument to this component in the form of an object
const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
}

//Connect is a function that takes up to 4 arguments, and returns a function that takes a component and returns a component
//updateLoginForm refers to simplified syntax, representing a key value pair with the same name
export default connect(mapStateToProps, { updateLoginForm, login } )(Login)