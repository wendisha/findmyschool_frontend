import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

//props get passed into a functional component as an object argument
const Login = ({ loginFormData, updateLoginForm, login }) => {
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
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={ handleInputChange } />
          <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={ handleInputChange } />
          <input type="submit" value="Log In"/>
        </form>
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