import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
import { Button, Form, Container } from 'react-bootstrap';

const Signup = ({ signupFormData, updateSignupForm, history, signup }) => {

    const handleUserInfoInputChange = event => {
      const { name, value } = event.target
      const updatedFormInfo = {
        ...signupFormData,
        [name]: value
      }
      updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
      <Container expand='md'>
        <Form onSubmit={handleSubmit}><br/>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={signupFormData.name} name="name" placeholder="Enter name" onChange={handleUserInfoInputChange}/>
            <Form.Text className="text-muted">We'll never share your information with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={signupFormData.username} name="username" placeholder="Enter username" onChange={handleUserInfoInputChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={signupFormData.password} name="password" placeholder="Enter password" onChange={handleUserInfoInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" value="Sign Up">Sign Up</Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => {
    return {
      signupFormData: state.signupForm
    }
}
  
export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)